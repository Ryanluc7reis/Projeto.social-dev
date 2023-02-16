import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;

`
const StyledLabel = styled.p`
  font-wight:bold;
  font-size: 14px;
  margin-bottom: 5px;
`

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid  ${props => props.theme.inputBorder};
  background-color: ${props => props.theme.inputBackground};
  padding: 15px 20px;
  box-sizing: border-box ;
  border-radius : 10px;
`

function Input ({label, ...props}) { // "...props " significa q todas as props que nao for label ,ira substituir automaticamente todas as outras props
   return (
      <InputContainer>
          <StyledLabel> {label}</StyledLabel>
          <StyledInput placeholder={label} {...props}/>
      </InputContainer>
   )
}

export default Input