import styled from 'styled-components'
import { withIronSessionSsr } from 'iron-session/next'

import { ironConfig }  from '../lib/middlewares/ironSession'

import Navbar from '../src/components/layout/NavBar'
import Container from '../src/components/layout/Container'
import CreatePost from '../src/components/cards/CreatePost'
import H3 from '../src/components/typography/H3'
import Post from '../src/components/cards/Post'
import { flushSync } from 'react-dom'

const Content = styled.div `
  margin: 50px 0;
`
const LastPostText = styled(H3)`
  padding: 40px 0;

`

const RefreshPost = styled.span`
  font-weight: bold;
  color: ${props => props.theme.primary};
  cursor: pointer ;
`

const RefreshPostContainer = styled.div`
  text-align: center;
`

const PostContainer = styled.div`
  display : flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`
function HomePage ({ user }) {
  console.log(user)
  
  return (
  <>
    <Navbar />
    <Content>
      <Container>
        <CreatePost username={user.user} />
          <LastPostText>Últimas postagens:</LastPostText> 
          <RefreshPostContainer>
          <RefreshPost>Carregar novas postagens</RefreshPost> 
          </RefreshPostContainer>
          <PostContainer>
            <Post />
            <Post />
            <Post />
          </PostContainer>                      
      </Container>      
    </Content>   
  </>
    
  )
}
export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req.session.user
   
    if (!user) {
      return {
        redirect : {
          permanent: false,
          destination: '/login'
        }

      }
    }

    return {
      props: {
        user
      }
    }
  },
  ironConfig
)


export default HomePage