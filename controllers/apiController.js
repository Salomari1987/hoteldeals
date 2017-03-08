var hotelsSvc = require('../services/hotelsSvc.js')

module.exports = {
	getAll: function (req, res) {
	    hotelsSvc.getAll( function (err, resp, data){
	      res.status(200).send(data)
		})
  	}
}