var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.resolve('public/index.html'));
});

app.listen(3000, function() {
  console.log('listening on port 3000');
});
