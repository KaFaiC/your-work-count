// Require our dependencies
var express 		= require('express'),
		bodyParser	= require('body-parser'),
		fs					= require('fs'),
		exphbs			= require('express-handlebars'),
		http				= require('http'),
		mongoose		= require('mongoose'),
		routes			= require('./routes'),
		config			= require('./config/config');

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 8080;

// Set handlebars as the templating engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Connect to mongodb
var connect = function() {
	var options = { server: { socketOptions: {keepAlive: 1} } };
	mongoose.connect(config.db, options);
};
connect();

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

//Bootstrap models
fs.readdirSync(__dirname + '/app/models').forEach(function (file) {
	if (~file.indexOf('.js', file.length - '.js'.length)) require(__dirname + '/app/models/' + file);
});

var commitments = require('./routes/commitments');

// Disable etag headers on responses
// app.disable('etag');

app
  .use("/", express.static(__dirname + "/public/"))
	.use(bodyParser.json())
	.use(bodyParser.urlencoded( {extended: true}))
	.use('/api', commitments)
  .get('/', routes.index)
  .listen(port, function() {
    console.log('Express server listening on port ' + port);
  });
