const http = require('http');
const express = require('express');

const app = express();

app.use(express.static('public'));

// if user visits root they will also be served index.html

app.get('/', function(req, res){
  // what does __dirname do?
  res.sendFile(__dirname + '/public/index.html');
});

var port = process.env.PORT || 3000;

var server = http.createServer(app)
  .listen(port, function(){
  console.log('Listening on port' + port + '.');
});

module.exports = server;
