var request = require('request')
module.exports = {
	getAll: function (cb) {
	     request.get("https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel", function (err, resp, body) {
			body = JSON.parse(body)
			cb(err, resp, body);
	    })
	}
}