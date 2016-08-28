var express = require('express');
require('dotenv').config();

var path = require('path');

var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.resolve('public/index.html'));
});

app.listen(3000, function() {
  console.log('test app key = ', process.env.APP_KEY);
  console.log('listening on port 3000');
});
