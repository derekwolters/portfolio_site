import { React } from 'react'
import styled from 'styled-components'

let imageMap = {
  meridityImage: {
    src: require("./site_images/meridity.png")
  },
  handheldSpecs1Image: {
    src: require("./site_images/handheld_specs_1.png")
  },
}

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
  comments,
  likes,
  views,
  actions,
}) => (
  <StyledContainer>
    <StyledPhoto
      src={imageMap[image].src}
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
