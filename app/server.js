var express = require('express')
var app = express()
var renderstatic = require('./renderstatic')
var index = require('ejs!./index.html')
var path = require('path')
var favicon = require('serve-favicon');

app.use(favicon(path.join(process.cwd(), 'public/favicon.ico')));
app.use(express.static(path.join(process.cwd(), 'public')))

app.get('/*', function (req, res) {
  renderstatic(req, function(html) {
    res.send(index({
      content: html
    }))
  })
})

var port = 9000
app.listen(port, function () {
  console.log('Listening on', port)
})
