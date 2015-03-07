// Require our dependencies
var express = require('express'),
  exphbs = require('express-handlebars'),
  http = require('http'),
  //twitter = require('ntwitter'),
  routes = require('./routes'),
  config = require('./config');

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 8080;

// Set handlebars as the templating engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Disable etag headers on responses
// app.disable('etag');

app
  .get('/', routes.index)
  .use("/", express.static(__dirname + "/public/"))
  .listen(port, function() {
    console.log('Express server listening on port ' + port);
  });
