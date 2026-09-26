import { useState, useEffect } from 'react';
import { Project } from '../../types/project'
import { projectList } from '../../data/projects'
import Card from '../../components/card/card';
import styled from 'styled-components';

const Section = styled.section`
  margin: 0 auto;
  padding: 1rem 0 3rem;
  width: min(1120px, 100%);
`

const Intro = styled.div`
  margin: 0 auto 1.5rem;
  max-width: 650px;
  text-align: center;
`

const Title = styled.h2`
  color: var(--headline-ink);
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0;
`

const Subtitle = styled.p`
  color: var(--quiet-ink);
  font-family: var(--font-body);
  margin: 0.75rem 0 0;
`

const StyledGrid = styled.div`
  display: flex;  
  flex-wrap: wrap;
  gap: 1.15rem;
  justify-content: center;
  margin: 1.75rem auto 0;
`

const CardArray = () => {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    setProjects(projectList)
  }, []) // eslint-disable-line

  if (!projects) {
    return null;
  }
  
  return(
    <Section id='projects'>
      <Intro>
        <Title>Selected Work</Title>
        <Subtitle>
          A focused set of builds spanning company presence, hobby projects,
          and iterative product experiments.
        </Subtitle>
      </Intro>
      <StyledGrid>
        {projects.map((project) => {
          return (
            <Card
              title={project.name}
              description={project.description}
              url={project.url}
              image={project.image}
              alt={project.alt}
              key={project.id}
            />
          )
        })}
      </StyledGrid>
    </Section>   
  )  
}

export default CardArray;
