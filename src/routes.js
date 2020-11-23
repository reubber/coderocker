import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Post from './components/Post'

function Routes () {
  return (
    <Router>
        <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/post/:id' exact component={Post} />
      </Switch>
    </Router>
  )
}

export default Routes
