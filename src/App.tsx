import CardArray from './components/cardArray/cardArray';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import styled from 'styled-components';

const StyledApp = styled.div`
  min-height: 100vh;
`

const Content = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1.25rem 3rem;
`

function App() {
  return (
    <StyledApp>
      <Header/>
      <Content>
        <CardArray/>
        <Footer/>
      </Content>
    </StyledApp>
  );
}

export default App;
