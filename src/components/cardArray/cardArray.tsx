import { useState, useEffect } from 'react';
import { Project } from '../../types/project'
import { projectList } from '../../data/projects'
import Card from '../../components/card/card';
import styled from 'styled-components';

const StyledGrid = styled.div`
  align-items: center;
  background-color: #D4D4D4;
  display: flex;  
  flex-wrap: wrap;
  justify-content: center;
  min-height: 100vh;
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
  )  
}

export default CardArray;
