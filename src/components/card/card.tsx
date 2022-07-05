import {ImageMap} from '../../data/imageMap'
import styled from 'styled-components'

const StyledContainer = styled.div`
  border: ${(props) => `1px solid green`};
  padding: 25px 12px 18px;
  background: ${(props) => `linear-gradient(
    45deg, #31a66b  , #31a66b
  )`};
  width: 300px;
  height: 450px;
  margin: 20px;
  border-radius: 25px;
`
const Title = styled.h2`
  color: #fff;
  font-weight: 500;
  @media (max-width: 250px) {
    font-size: 1rem;
  }
  margin-top: 3px;
  margin-bottom: 6px;
`
const Description = styled.p`
  color: #fff;
  font-weight: 400;
  font-size: 1.25rem;
  @media (max-width: 250px) {
    font-size: .75rem;
  }
  margin-bottom: 4px;
`

const StyledPhoto = styled.img`
  width: 100%;
  border-radius: 25px;
  object-fit: cover;
  border: ${(props) => `1px solid black`};
`

const StyledLink = styled.a`
  color: #fff;
  :link {
    text-decoration: none;}  
  :visited {
    text-decoration: none;}  
  :hover {
    text-decoration: underline;}  
  :active {
    text-decoration: underline;}
`

const Card = ({title, description, url, image, alt,}:{         
  title: string;
  description: string;
  url: string;
  image: any;
  alt: string;
  }) => (
    <StyledContainer>
      <StyledPhoto
        src={ImageMap.get(image)}
        alt={alt}
      />
      <Title>
        <StyledLink
          href={url}
          target='_blank'
          rel="noopener"
        >
          {title}
        </StyledLink>
      </Title>
      <Description>{description}</Description>
    </StyledContainer>
)

export default Card
