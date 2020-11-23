import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Fixed from '../Card/Fixed'
import api from '../../api'
import Unique from '../Card/Unique'
import styled from 'styled-components'

const Container = styled.span`
  display: flex;
  height: 320px;
  width: 50%;
  float: left;
  margin: 60px 0 80px 0;
  boxShadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 40rem) {
    display: flex;
    float: top;
    width: 100%;
    margin: 0;
  }

  @media (max-width: 80rem) {
    display: flex;
    float: top;
    width: 100%;
    margin: 30px 0 40px 0;
  }
`
class Home extends Component {
  
  constructor (props) {
    super(props)

    this.state = {
      articles: [],
      start:1,
      count: 9, 
    }
    
  }
  
  componentDidMount () {
    const {count, start} = this.state
    api
      .get(`https://stormy-shelf-93141.herokuapp.com/articles?_page=${start}&_limit=${count}`)
      .then(res => this.setState({articles:res.data}))
  }

  fetchImages = () => {
    const {count, start} = this.state
    this.setState({ start: this.state.start + 1 })
     api.get(`https://stormy-shelf-93141.herokuapp.com/articles?_page=${start}&_limit=${count}`)
     .then(res => this.setState({articles: this.state.articles.concat(res.data)}))
   }

   regex(body){
    var regex = /(<([^>]+)>)/ig
      return body.replace(regex, "");
   }

  render () {
    const { articles } = this.state
    let position = false

    return (
      <div>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchImages}
          hasMore={true}
        >
          { 
          articles.map((item, index) => {
            if ((index + 1) % 3 === 0) {
              position = !position
              return (
                <Fixed
                  key={index}
                  id={item.id}
                  article={this.regex(item.article)}
                  position={position}
                  name={item.author}
                  title={this.regex(item.title)}
                  imageUrl={item.imageUrl}/>
              )
            } else {
              return (
                <Container key={index}>
                    <Unique
                      id={item.id}
                      name={item.author}
                      article={this.regex(item.article)}
                      title={this.regex(item.title)}
                      imageUrl={item.imageUrl} />
                </Container>
              )
            }
          })}
        </InfiniteScroll>
      </div>
    )
  }
}
export default Home
