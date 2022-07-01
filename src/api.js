import { v4 as uuidv4 } from 'uuid';

const idOne = uuidv4();
const idTwo = uuidv4();

let projects = {
  idOne: {
    id: idOne,
    name: 'Company Website',
    description: 'My company website',
    url: 'https://www.meridity.com',
    pic: 'meridityImage',
  },
  idTwo: {
    id: idTwo,
    name: 'Gaming Handheld List 1',
    description: 'Handheld gaming consoles list',
    url: 'https://handheldspecs.netlify.app/',
    pic: 'handheldSpecs1Image',
  }
}

export const getProjects = () =>
  new Promise((resolve) => {
    if (!projects) {
      PromiseRejectionEvent(new Error('Projects not found'));
    }
    resolve(Object.values(projects));
  });

getProjects()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

const doGetProjects = async () => {
  try {
    const result = await getProjects();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

doGetProjects();
//assistance: https://www.robinwieruch.de/javascript-fake-api/