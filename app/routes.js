var React = require('react'),
    ReactApp = React.createFactory(require('../app/main'));

module.exports = function(app) {
  app.get('/', function(req, res){
    var reactHtml = React.renderToString(ReactApp({}));
    res.render('index.ejs', { reactOutput: reactHtml });
  });
};
