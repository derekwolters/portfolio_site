import styled from 'styled-components'
import {ImageMap} from './data/imageMap'

/* const imageMap = new Map<string, string> ([
  ["meridityImage", require("./site_images/meridity.png")],
  ["handheldSpecs1Image", require("./site_images/handheld_specs_1.png")]
]) */

const StyledContainer = styled.div`
  border: ${(props) => `1px solid green`};
  padding: 25px 12px 18px;
  background: ${(props) => `linear-gradient(
    45deg, #32cd32 , #F5F5F5
  )`};
  width: 300px;
  height: 450px;
`
const Title = styled.h2`
  color: #fff;
  font-weight: 200;
  @media (max-width: 250px) {
    font-size: 1rem;
  }
  margin-top: 3px;
  margin-bottom: 6px;
`
const Description = styled.p`
  color: #fff;
  font-weight: 200;
  @media (max-width: 250px) {
    font-size: 0.25rem;
  }
  margin-bottom: 4px;
`

const StyledPhoto = styled.img`
  width: 100%;
  
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

const Card = ({
  title,
  description,
  url,
  image,
  alt,
  }:{
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
