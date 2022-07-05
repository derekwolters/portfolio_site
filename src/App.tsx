import { useState, useEffect } from 'react';
import logo from './site_images/meridity_logo.png';
import { Draggable } from 'drag-react';
import Card from './card';
import styled from 'styled-components';
import {Project} from './types/project'

const StyledApp = styled.div`
  text-align: center;
`

const StyledHeader = styled.header`
  background-color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const StyledLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
`

const StyledContainer = styled.div`
  max-width: 250px;
  max-height: 400px;
  width: 100%;
  margin: auto;
`

const StyledGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  /*max-width: 800px;*/
`

function App() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    getProjects()
      .then(projects => {
        setProjects(projects)
      })
  }, []) // eslint-disable-line

  function getProjects(): Promise<Project[]> {
    return fetch('http://localhost:3000/projects')
      .then(res => res.json())
      .then(res => {
        return res as Project[]
      })
}

  if (!projects) {
    return null;
  }

  return (
    <StyledApp>
      <StyledHeader>
        {/* <Draggable> */}
          <StyledLogo src={logo} alt="logo" />
        {/* </Draggable> */}
      </StyledHeader>
      <StyledGrid>
          {/* <StyledContainer> */}
            {projects.map((project) => {
              return (
                //<Draggable style={{ left: '250px', top: '250px' }} key={project.id}>
                  <Card
                    title={project.name}
                    description={project.description}
                    url={project.url}
                    image={project.image}
                    alt={project.alt}
                    key={project.id}
                  />
                //</Draggable>
              )
            })}
          {/* </StyledContainer> */}
        </StyledGrid>      
    </StyledApp>
  );
}

export default App;
