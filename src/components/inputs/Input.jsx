import { forwardRef } from "react"
import styled from "styled-components"

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

const Input = forwardRef (({label, ...props}, ref) => { // "...props " significa q todas as props que nao for label ,ira substituir automaticamente todas as outras props
  return (                                               // o parametro do "forwardRef" é o componente todo como esta a abaixo         
     <InputContainer>
         <StyledLabel> {label}</StyledLabel>
         <StyledInput placeholder={label} {...props} ref={ref} />
     </InputContainer>
  )
  
})

export default Input