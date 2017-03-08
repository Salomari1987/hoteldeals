var helpers = require('./helpers.js'); // our custom middleware
var apiController = require('../controllers/apiController')

module.exports = function (app, express) {
  app.get('/1', apiController.getAll)

  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};
