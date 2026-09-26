import {ImageMap} from '../../data/imageMap'
import styled from 'styled-components'

const StyledContainer = styled.div`
  background: var(--card-glass);
  border: 1px solid var(--line);
  border-radius: 24px;
  box-shadow:
    0 16px 34px rgba(0, 0, 0, 0.34),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  display: flex;
  flex-direction: column;
  padding: 0.9rem 0.9rem 1.1rem;
  transition: transform 220ms ease, box-shadow 220ms ease;
  width: min(320px, 100%);

  &:hover {
    border-color: rgba(255, 146, 45, 0.45);
    box-shadow:
      0 20px 34px rgba(0, 0, 0, 0.44),
      0 0 0 1px rgba(11, 201, 168, 0.28);
    transform: translateY(-6px);
  }
`

const Title = styled.h2`
  margin: 0;
`

const Description = styled.p`
  color: var(--muted-ink);
  font-family: var(--font-body);
  font-size: 0.98rem;
  line-height: 1.45;
  margin: 0;
`

const StyledPhoto = styled.img`
  border: 1px solid rgba(147, 172, 198, 0.26);
  border-radius: 18px;
  height: 172px;
  object-fit: cover;
  width: 100%;
`

const Meta = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.55rem;
  padding: 0.8rem 0.2rem 0;
`

const StyledLink = styled.a`
  color: var(--title-ink);
  font-family: var(--font-display);
  font-size: 1.23rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  text-decoration: none;

  &:hover {
    color: var(--orange);
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-decoration-color: rgba(255, 146, 45, 0.45);
    text-underline-offset: 3px;
  }
`

const Card = ({title, description, url, image, alt,}:{         
  title: string;
  description: string;
  url: string;
  image: string;
  alt: string;
  }) => (
    <StyledContainer>
      <StyledPhoto
        src={ImageMap.get(image)}
        alt={alt}
      />
      <Meta>
        <Title>
          <StyledLink
            href={url}
            target='_blank'
            rel="noopener noreferrer"
          >
            {title}
          </StyledLink>
        </Title>
        <Description>{description}</Description>
      </Meta>
    </StyledContainer>
)

export default Card
