var express = require('express'),
  path = require('path'),
  app = express(),
  port = 9292,
  bodyParser = require('body-parser');

require('node-jsx').install();
app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require('./routes')(app);

app.listen(port);
console.log('Server running on port: ' + port);
