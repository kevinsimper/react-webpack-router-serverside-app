import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import routes from './routes.js'

let router = (
  <Router history={createBrowserHistory()}>
    {routes}
  </Router>
)

ReactDOM.render(router, document.getElementById('main'))
