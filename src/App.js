import logo from './logo.svg';
import './App.css';
import { Draggable } from 'drag-react';
import Card from './card';
import styled from 'styled-components';
import { getProjects } from './api';
import { React, useState, useEffect } from 'react';

/* const StyledRoot = styled.div`
  padding: 50px 12px;
` */

const StyledContainer = styled.div`
  max-width: 250px;
  max-height: 400px;
  width: 100%;
  margin: auto;
`

function App() {
  const [projects, setProjects] = useState(null)

  useEffect(() => {
    const doGetProjects = async () => {
      const result = await getProjects();
      setProjects(result);
    };
    console.log('projects', projects)
    doGetProjects();
  }, []) // eslint-disable-line

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
                  pic={project.pic}
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
