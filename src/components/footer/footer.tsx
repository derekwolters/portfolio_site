import styled from 'styled-components';

const StyledFooter = styled.footer`
  border-top: 1px solid var(--line);
  color: var(--quiet-ink);
  display: flex;
  font-family: var(--font-body);
  align-items: center;
  justify-content: center;
  margin: 2rem auto 0;
  min-height: 120px;
  padding: 1.25rem;
  text-align: center;
`

const Accent = styled.span`
  color: var(--teal);
  font-weight: 600;
`

const Footer = () => (     
  <StyledFooter>
    Built by Derek. <Accent>Always iterating, always shipping.</Accent>
  </StyledFooter>
)

export default Footer;
