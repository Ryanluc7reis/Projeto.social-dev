import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { withIronSessionSsr } from 'iron-session/next'
import axios from 'axios'
import useSWR from 'swr'

import { ironConfig }  from '../lib/middlewares/ironSession'

import Navbar from '../src/components/layout/NavBar'
import Container from '../src/components/layout/Container'
import CreatePost from '../src/components/cards/CreatePost'
import H3 from '../src/components/typography/H3'
import Post from '../src/components/cards/Post'


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

const fetcher = url => axios.get(url).then(res => res.data) // '.then()' é uma forma de esperar a execução acontecer

function HomePage ({ user }) {
  const { data } = useSWR( `${process.env.NEXT_PUBLIC_API_URL}/api/post`, fetcher)
 
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
            {
              data?.map(post =>
                <Post
                  key={post._id}
                  text={post.text}
                  user={post.createdBy.user}
                  date={post.createdDate}
                  
                /> 
                )
            }
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