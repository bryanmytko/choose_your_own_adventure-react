var express = require('express'),
  path = require('path'),
  app = express(),
  port = 9292,
  bodyParser = require('body-parser');

require('node-jsx').install();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require('./app/routes/core-routes.js')(app);

app.get('*', function(req, res) {
  res.json({
    'route': '404 - Page Not Found'
  });
});

app.listen(port);
console.log('Server running on port: ' + port);
