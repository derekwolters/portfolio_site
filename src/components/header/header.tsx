import logo from '../../site_images/meridity_logo.png'
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #D4D4D4;
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

const Header = () => (     
  <StyledHeader>
    <StyledLogo src={logo} alt="logo" />
  </StyledHeader>
)

export default Header;
