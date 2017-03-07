var helpers = require('./helpers.js'); // our custom middleware
var request = require('request')

module.exports = function (app, express) {
  app.get('/', function (req, res) {
    console.log("its working")
  })

  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};
