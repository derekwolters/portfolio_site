import CardArray from './components/cardArray/cardArray';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import styled from 'styled-components';

const StyledApp = styled.div`
  text-align: center;
`

function App() {
  return (
    <StyledApp>
      <Header/>
      <CardArray/>
      <Footer/>
    </StyledApp>
  );
}

export default App;
