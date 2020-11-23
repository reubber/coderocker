import React from 'react'
import { Link } from 'react-router-dom'
import Modals from '../Modal'

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  background-color: #2D2D2D;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  height: 100px;
  top: 0;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
  text-decoration: none;
`
const HeaderRight = styled.div`
  display: flex;
  font-size: 32px;
  font-weight: 500;
  float: right;
  color: #ffffff;
  text-decoration: none;
`

const LinkNavItem = styled(Link)`
  color: inherit;
  margin-right: 45px;
  &:hover {
    color: #ddd;
  }
`
const Logo = styled.p`
  font-size: 36px;
  font-weight: 700;
  color: #ffffff;
  object-fit: contain;
`

class Header extends React.Component {
  
  render() {
    
  return (
    <Container>
      <Link to="/">
        <Logo>Rockr Blog</Logo>
      </Link>

      <HeaderRight>
        <LinkNavItem to="/">
          <p>Posts</p>
        </LinkNavItem>
          <Modals/>
        
        </HeaderRight>
    </Container>
  )
}
}

export default Header
