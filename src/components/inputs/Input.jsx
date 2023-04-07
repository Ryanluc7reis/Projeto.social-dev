import styled from "styled-components"
import { useController } from "react-hook-form" 


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

  

    &:focus {
    outline: auto;
  }
`

const ErrorLabel = styled.span`
  color: ${props => props.theme.error};
  font-weight: bold;
  font-size: 14px;
 

`
const errorMessage = {
  'string.empty': 'Este campo é obrigatório.',
  'string.email':'Por favor,digite um email válido.',
  'duplicated' : 'Ja existe uma conta com esse valor. '
}
const Input = ({label, name ,control, defaultValue='', ...props }) => {
     const {
        field :{ value, onChange},
        fieldState : { error }
     } = useController({ name, control, defaultValue })                                                             
  return (                                                      // o parametro do "forwardRef"(precisa ser importad do react) é o componente todo como esta a abaixo  e tbm serve para dar referencia para o react e JS para o componente  input certo q esta esprando junto com o ref    // "...props " significa q todas as props que nao for label ,ira substituir automaticamente todas as outras props   
     <InputContainer>
         <StyledLabel> {label}</StyledLabel>
         <StyledInput placeholder={label} error={error} {...props} value={value} onChange={onChange} />
          {error && <ErrorLabel > {errorMessage[error.type] || error.message}</ErrorLabel>}
     </InputContainer>
  )
  
}

export default Input