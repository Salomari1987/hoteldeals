var express = require('express');

var app = express();

// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

// start listening to requests on port 8000
app.listen(8000, function () {
	console.log("Listening on port 8000")
});

module.exports = app;