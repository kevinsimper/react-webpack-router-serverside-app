import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import routes from './routes'

export default function (req, cb) {
  match({
    routes: routes,
    location: req.url
  }, (error, redirectLocation, renderProps) => {
    if(error) {
      cb(error)
    } else if(redirectLocation) {
      cb(null, {
        redirectLocation: redirectLocation
      })
    } else if(renderProps) {
      cb(null, {
        html: renderToString(<RoutingContext {...renderProps} />)
      })
    } else {
      cb(null, {
        status: 'not found'
      })
    }
  })
}
