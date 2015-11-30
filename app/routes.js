import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Main from './components/Main'
import Home from './components/Home'
import Contact from './components/Contact'

export default (
  <Route path='/' component={Main}>
    <IndexRoute component={Home} />
    <Route path='contact' component={Contact} />
  </Route>
)
