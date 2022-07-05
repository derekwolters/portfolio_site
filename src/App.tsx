import { useState, useEffect } from 'react';
import logo from './site_images/meridity_logo.png';
import './App.css';
import { Draggable } from 'drag-react';
import Card from './card';
import styled from 'styled-components';
import {Project} from './types/project'

const StyledContainer = styled.div`
  max-width: 250px;
  max-height: 400px;
  width: 100%;
  margin: auto;
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
    <div className="App">
      <header className="App-header">
        <Draggable>
          <img src={logo} className="App-logo" alt="logo" />
        </Draggable>

        <StyledContainer>
          {projects.map((project) => {
            return (
              <Draggable style={{ left: '250px', top: '250px' }} key={project.id}>
                <Card
                  title={project.name}
                  description={project.description}
                  url={project.url}
                  image={project.image}
                  alt={project.alt}
                />
              </Draggable>
            )
          })}
        </StyledContainer>

      </header>
    </div>
  );
}

export default App;
