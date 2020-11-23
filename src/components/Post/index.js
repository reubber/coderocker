import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height:1612px;
  width:70%;
  margin: 100px auto;
  background:white;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
`
const Image = styled.img`
  width: 50%;
  height: 40%;
`

const Content = styled.div`
  height: 595px;
  padding: 80px 0 0 60px;
  margin-top: 50px;
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
`

function Post (props) {
  const { title, name, img, article} = props.location.state
  console.log('article',article)

  return (
    <>
      <Container>
        <div style={{display:'flex'}}>
        <Image src={img} alt=""/>
        <Content>
          <Text>{name}</Text>
          <Title>{title}</Title>
        
        </Content> 
        </div>
        <Article>ERROR</Article>
      
      </Container>  
    </>
  )
}


export default Post
