import styled from 'styled-components';

const StyledFooter = styled.header`
  background-color: #D4D4D4;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
`

const Footer = () => (     
  <StyledFooter>
    Made by Derek
  </StyledFooter>
)

export default Footer;
