module.exports = function(app){
  app.get('/', function(req, res){
    res.render('index.ejs');
  });

  app.get('*', function(req, res) {
    /* @TODO Combine node & react routing to allow this */
    // res.json({
    //   route: '404 - Page Not Found'
    // });
  });
};
