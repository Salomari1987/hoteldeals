var hotelsSvc = require('../services/hotelsSvc.js')

module.exports = {
	getAll: function (req, res) {
		var url = "https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel";
		
		if (req.body.filters) {
			for (key in req.body.filters) {
				url += "&" + key + "=" + req.body.filters[key]
			}
		}

	    hotelsSvc.getAll( function (err, resp, data){
	      res.status(200).send(data)
		}, url)
  	}
}