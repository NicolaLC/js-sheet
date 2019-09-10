var express = require('express')
var http = require('http')
var path = require('path')
var reload = require('reload')
var bodyParser = require('body-parser')
var logger = require('morgan')
var watch = require('watch')
var app = express()

var publicDir = path.join(__dirname, 'dist')

app.set('port', 4040)
app.use(logger('dev'))
app.use(bodyParser.json()) // Parses json, multi-part (file), url-encoded
app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(path.join(publicDir, 'index.html'))
});

var server = http.createServer(app)

// Reload code here
reload(app).then(function (reloadReturned) {
  // reloadReturned is documented in the returns API in the README
  watch.watchTree(__dirname + "/dist", function (f, curr, prev) {
    // Fire server-side reload event
    reloadReturned.reload();
  });
  // Reload started, start web server
  server.listen(app.get('port'), function () {
    console.log('Web server listening on port ' + app.get('port'))
  })
}).catch(function (err) {
  console.error('Reload could not start, could not start server/sample app', err)
})