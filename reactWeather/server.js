var express = require('express');

// Create our app
var app = express();

app.use(express.static('public'));

app.listen(3000, function() {
  console.log('Express server is up and running on motherfuckin\' port 3000');
});
