var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!, A Change from github')
})

app.get('/message', function (req, res) {
  res.send('Message')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
