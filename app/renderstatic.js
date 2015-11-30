import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import routes from './routes'

export default function (req, cb) {
  match({
    routes: routes,
    location: req.url
  }, (error, redirectLocation, renderProps) => {
    cb(renderToString(<RoutingContext {...renderProps} />))
  })
}
