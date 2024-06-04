import styled from 'styled-components'


const WIDTH_BREAK = '500px'
const StyledFlex = styled.div`
  display: flex;
`
const StyledImage = styled.div`
  background-image: url('${props => props.image}');
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
 @media (max-width: ${WIDTH_BREAK}) {
  display: none;
 }
`
const StyledConatainer = styled.div`
 background-color: ${props => props.theme.white};
 padding: 30px 50px;

 @media (min-width: ${WIDTH_BREAK}) { 
  min-width: calc(${WIDTH_BREAK} - 100px);
 }

 @media (max-width: ${WIDTH_BREAK}) {
  max-width: 100%;

  display: flex;
  flex-direction: column;
  

  height : calc(100vh - 60px);
  overflow-y: auto ;

  &:before, &:after {
    content: '';
    margin: auto;
  }
}
`


 function ImageWithSpace ({children,image}) {
  return(
    <StyledFlex>
      <StyledImage image={image} />
      <StyledConatainer>
        {children}
      </StyledConatainer>     
    </StyledFlex>

    ) 
}

ImageWithSpace.defaultProps = {
    image: '/coffee-background.jpg'
} 

export default ImageWithSpace
 