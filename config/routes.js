var helpers = require('./helpers.js'); // our custom middleware
var request = require('request')
var hotelsSvc = require('../services/hotelsSvc.js')
module.exports = function (app, express) {
  app.get('/1', function (req, res) {
    console.log(1111)
    hotelsSvc.getAll({}, function (err, resp, data){
      console.log(resp.statusCode)
      res.status(200).send(data)
    })
  })

  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};
