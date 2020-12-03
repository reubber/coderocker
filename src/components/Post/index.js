import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height:1612px;
  width:70%;
  margin: 100px auto;
  background:white;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 80rem){
    height: 1200px;
  }
`
const Image = styled.img`
  width: 50%;
  height: 40%;
  @media (max-width: 80rem){
    width: 100%; 
  }
`
const Wrapper = styled.div`
  display: flex;
  @media (max-width: 80rem){
    flex-direction: column; 
  }
`

const Content = styled.div`
  height: 595px;
  padding: 80px 0 0 60px;
  margin-top: 50px;
  @media (max-width: 80rem){
    height: 280px;
    padding:0;
    margin: 0; 
  }
`
const Title = styled.h1`
  margin-bottom: 10px;
  color:#F1A10A;
`

const Text = styled.p`
  margin: 20px 0;
  color: #2D2D2D;
`
const Article = styled.div`
  position: relative;
  font-size: large;
  padding: 10% 20%;
  color: #2D2D2D;
  width: 100%;
  @media (max-width: 80rem){
    padding:0;
    margin: 0; 
  }
`

function Post (props) {
  const { title, name, img, article} = props.location.state
  
  return (
    <>
      <Container>
        <Wrapper>
        <Image src={img} alt=""/>
        <Content>
          <Text>{name}</Text>
          <Title>{title}</Title>
        
        </Content> 
        </Wrapper>
        <Article>{article}</Article>
      
      </Container>  
    </>
  )
}


export default Post
