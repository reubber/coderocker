import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 50%;
  background-color: #FFFFFF;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
`
const Content = styled.div`
  padding: 30px 30px 0px 50px;
  width:fit-content;
  height:290px;
`
const Card = styled.div`
  display: flex;
 
`
const Image = styled.img`
  max-width: 40%;
  height:auto;
`
const Text = styled.p`
  margin: 10px 0;
  color: #2D2D2D;
`
const Title = styled.h2`
  color:#F1A10A;
  margin-bottom: 10px;
  @media (max-width: 50rem){
    font-size: 1.8vw; 
   }
`
const Article = styled.div`
  font-size: x-small;
  color: #2D2D2D;
  @media (max-width: 50rem){
    font-size: xx-small 
   }
`

const PostLink = styled(Link)`
  position: relative;
  width: 0px;
  height: 0px;
`


function Unique ({ id, name, title, article, imageUrl }) {
  
  return (
    <Container>
      <Card>  
        <Image src={imageUrl} alt={title} />
        <Content>
          <Text>{name}</Text>
          <PostLink to={{ pathname: `/post/${id}`, state: { title: title, name: name, img: imageUrl, article: article} }}>
            <Title>{title}</Title>
          </PostLink>
          <Article>{`${article.substring(0, article.length/2)}...`}</Article>
          <Image src='' alt="" />
        </Content>
     
      </Card>
    </Container>
  )
}

Unique.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  imageUrl: PropTypes.string
}

export default Unique
