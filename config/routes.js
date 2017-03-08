var helpers = require('./helpers.js'); // our custom middleware
var apiController = require('../controllers/apiController')

module.exports = function (app, express) {
  app.get('/api/deals', apiController.getAll)

  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};
