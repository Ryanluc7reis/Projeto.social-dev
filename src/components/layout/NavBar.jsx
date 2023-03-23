import styled from 'styled-components'
import axios from 'axios'
import { useRouter } from 'next/router'




const StyledNavBar = styled.div`
  background-color: ${props => props.theme.white};
  height : 80px;
  display: flex;
  align-items : center;
  padding : 0 100px;

  @media (max-width: 500px) {
    padding : 0 20px;
  }

`
const StyledLogo = styled.span`
  flex: 1 ;
  font-weight: bold;
  font-size : 20px;
`
const StyledLogout = styled.a`
  cursor: pointer ;
`

function Navbar () {
  const router = useRouter()
  
  const handlelogout = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/logout`)
    router.push('/')
  }
  return (
    <StyledNavBar>
      <StyledLogo># Social Dev</StyledLogo>
      <div>
        <StyledLogout onClick={handlelogout}>Desconectar</StyledLogout>
      </div>

    </StyledNavBar>
  )

}

export default Navbar