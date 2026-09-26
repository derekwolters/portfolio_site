import logo from '../../site_images/brand-logo-small-no-background-no-header.webp'
import styled from 'styled-components';

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 92vh;
  padding: 2rem 1.25rem;
`

const HeroPanel = styled.div`
  border: 1px solid var(--line);
  border-radius: 28px;
  background:
    linear-gradient(145deg, rgba(8, 16, 24, 0.9), rgba(8, 16, 24, 0.75)),
    linear-gradient(120deg, rgba(255, 146, 45, 0.2), rgba(11, 201, 168, 0.22));
  box-shadow:
    0 22px 48px rgba(0, 0, 0, 0.38),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  text-align: center;
  width: min(920px, 100%);

  @media (max-width: 700px) {
    border-radius: 22px;
    padding: 1.75rem 1.25rem;
  }
`

const StyledLogo = styled.img`
  filter: drop-shadow(0 8px 18px rgba(0, 0, 0, 0.42));
  height: clamp(56px, 10vw, 90px);
  max-width: min(420px, 88vw);
  object-fit: contain;
  pointer-events: none;
  width: auto;
`

const Eyebrow = styled.p`
  color: var(--orange);
  font-family: var(--font-display);
  font-size: 0.84rem;
  font-weight: 800;
  letter-spacing: 0.11em;
  margin: 0;
  text-transform: uppercase;
`

const Headline = styled.h1`
  color: var(--headline-ink);
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.65rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.05;
  margin: 0;
  max-width: 14ch;
`

const Tagline = styled.p`
  color: var(--quiet-ink);
  font-family: var(--font-body);
  font-size: clamp(1rem, 2.1vw, 1.25rem);
  line-height: 1.55;
  margin: 0;
  max-width: 58ch;
`

const Action = styled.a`
  background: linear-gradient(120deg, var(--orange-dark), var(--orange));
  border-radius: 999px;
  color: #181008;
  display: inline-flex;
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  margin-top: 0.25rem;
  padding: 0.85rem 1.3rem;
  text-decoration: none;
  transition: transform 220ms ease, box-shadow 220ms ease;

  &:hover {
    box-shadow: 0 12px 24px rgba(255, 146, 45, 0.34);
    transform: translateY(-2px);
  }
`

const Header = () => (     
  <StyledHeader>
    <HeroPanel>
      <StyledLogo src={logo} alt="Meridity logo" />
      <Eyebrow>Portfolio</Eyebrow>
      <Headline>Crafting useful web experiences with personality.</Headline>
      <Tagline>
        I design and build practical products with crisp interfaces, clear structure,
        and an eye for details that make software feel alive.
      </Tagline>
      <Action href="#projects">Explore Projects</Action>
    </HeroPanel>
  </StyledHeader>
)

export default Header;
