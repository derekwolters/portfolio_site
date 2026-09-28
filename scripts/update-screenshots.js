#!/usr/bin/env node
// Fetches a screenshot for each project URL via Microlink and saves it to
// src/images/projectPreviews, named after a slug of the project name (e.g.
// "Company Website" -> company-website.jpg) so the filename always makes it
// obvious which project it belongs to. Screenshots are captured as JPEG
// (Microlink doesn't support WebP output) at moderate quality, since a
// lossless PNG of a full webpage is 5-10x larger for no visible benefit at
// preview-thumbnail size. Skips any project whose image file already
// exists, so a normal deploy makes no network calls — pass --force to
// re-capture everything. Also keeps each project's "image" field in
// projects.json in sync with that naming scheme.

const fs = require("fs");
const path = require("path");

const projectsPath = path.join(__dirname, "..", "src", "_data", "projects.json");
const imagesDir = path.join(__dirname, "..", "src", "images");
const previewsSubdir = "projectPreviews";
const force = process.argv.includes("--force");

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function fetchScreenshot(url) {
  const apiUrl = new URL("https://api.microlink.io/");
  apiUrl.searchParams.set("url", url);
  apiUrl.searchParams.set("screenshot", "true");
  apiUrl.searchParams.set("meta", "false");
  apiUrl.searchParams.set("embed", "screenshot.url");
  apiUrl.searchParams.set("viewport.width", "1280");
  apiUrl.searchParams.set("viewport.height", "800");
  apiUrl.searchParams.set("viewport.deviceScaleFactor", "1");
  apiUrl.searchParams.set("screenshot.type", "jpeg");
  apiUrl.searchParams.set("screenshot.quality", "80");

  const headers = {};
  if (process.env.MICROLINK_API_KEY) {
    headers["x-api-key"] = process.env.MICROLINK_API_KEY;
  }

  const res = await fetch(apiUrl, { headers });
  if (!res.ok) {
    throw new Error(`Microlink request failed (${res.status}): ${await res.text()}`);
  }
  return Buffer.from(await res.arrayBuffer());
}

async function main() {
  const projects = JSON.parse(fs.readFileSync(projectsPath, "utf8"));
  let projectsChanged = false;

  for (const project of projects) {
    if (!/^https?:\/\//.test(project.url)) {
      // Not a URL Microlink can screenshot (e.g. a page served by this same
      // site), so its image is provided manually — leave it as-is.
      console.log(`Skipping "${project.name}" (not a live URL: ${project.url})`);
      continue;
    }

    const relativeImagePath = `${previewsSubdir}/${slugify(project.name)}.jpg`;
    const expectedImageField = `/images/${relativeImagePath}`;

    if (project.image !== expectedImageField) {
      console.log(`Updating image path for "${project.name}": ${project.image} -> ${expectedImageField}`);
      project.image = expectedImageField;
      projectsChanged = true;
    }

    const imagePath = path.join(imagesDir, previewsSubdir, `${slugify(project.name)}.jpg`);

    if (fs.existsSync(imagePath) && !force) {
      console.log(`Skipping "${project.name}" (screenshot already exists)`);
      continue;
    }

    console.log(`Capturing screenshot for "${project.name}" (${project.url})...`);
    try {
      const buffer = await fetchScreenshot(project.url);
      fs.mkdirSync(path.dirname(imagePath), { recursive: true });
      fs.writeFileSync(imagePath, buffer);
      console.log(`Saved ${imagePath}`);
    } catch (err) {
      console.error(`Failed to capture screenshot for "${project.name}": ${err.message}`);
    }
  }

  if (projectsChanged) {
    fs.writeFileSync(projectsPath, `${JSON.stringify(projects, null, 2)}\n`);
    console.log("Updated projects.json with corrected image paths.");
  }
}

main();
