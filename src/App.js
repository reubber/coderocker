import React from 'react'
import Routes from './routes'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
    
  }

  body {
    background: rgb(53,36,2);
    background: linear-gradient(270deg, rgba(53,36,2,1) 0%, rgba(241,161,10,1) 85%); 
    background-repeat:none;
  }

  p {
    font-weight: normal;
  }

  a {
    text-decoration: none;
  }
`

function App () {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  )
}

export default App
