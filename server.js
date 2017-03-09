var express = require('express');
var app = express();
var server = require('http').createServer(app);


// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

var PORT = process.env.PORT || 8000;

// start listening to requests on port 8000
app.listen(PORT, function () {
	console.log("Listening on port 8000")
});

app.on ( 'uncaughtException', function () {
	//Close connection
	server.close();
});

// On kill
app.on('SIGTERM', function() {
	server.close();
});

//On exit
app.on('exit', function() {
	server.close();
});

module.exports = {
	app: app,
	server: server
}