import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  display: flex;
  float: ${props =>
    props.position ? 'right' : 'left'};
  width: 80%;
  height: 640px;
  background-color: #ffffff;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 40rem) {
    display: flex;
    height: 320px;
    margin: 0;
  }

  @media (max-width: 80rem) {
    display: flex;
    height: 450px;
    flex-direction:column;
  }

`
const Image = styled.img`
    
  width: 100%;  
  min-height: auto;   
  background-size: 100%;
  background-repeat: no-repeat;
  @media (max-width: 80rem){
    max-width: 220px; 
  }
`
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 80px 40px 60px;
  min-width:200px;
`

const Title = styled.h2`
  margin-bottom: 10px;
  color:#F1A10A;
  @media (max-width: 50rem){
    font-size: 1.8vw; 
   }
`

const Text = styled.p`
  margin: 20px 0;
  color: #2D2D2D;
  
`
const Article = styled.div`
  font-size: small;
  color: #2D2D2D;
  @media (max-width: 50rem){
    font-size: 1.8vw; 
   }
`

function fixedCard ({ id, title, name, article, imageUrl, position }) {
  
    return (
      <Container position={position}>
        <Image src={imageUrl} alt={title}/>
        <Content>
          <Text>{name}</Text>
          <Link to={{ pathname: `/post/${id}`, state: { title: title, name: name, img: imageUrl, article: article} }}>
            <Title>{title}</Title>
          </Link>
          <Article>{`${article.substring(0, article.length/2)}...`}</Article>
        </Content>
      </Container>
  )
}
fixedCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  imageUrl: PropTypes.string
}
export default fixedCard
