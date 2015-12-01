var express = require('express')
var app = express()
var renderstatic = require('./renderstatic')
var index = require('ejs!./index.html')
var path = require('path')
var favicon = require('serve-favicon');

var production = process.env.NODE_ENV === 'production'

app.use(favicon(path.join(process.cwd(), 'public/favicon.ico')));
app.use(express.static(path.join(process.cwd(), 'public')))

app.get('/*', function (req, res) {
  renderstatic(req, function(error, options) {
    if(error) {
      res.status(500).send(error.message)
    } else if (options.redirectLocation) {
      res.redirect(302, options.redirectLocation.pathname + options.redirectLocation.search)
    } else if (options.html) {
      res.send(index({
        content: options.html,
        production: production
      }))
    } else {
      res.status(404).send('Not found')
    }
  })
})

var port = 9000
app.listen(port, function () {
  console.log('Listening on', port)
})
