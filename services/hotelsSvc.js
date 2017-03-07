var request = require('request')

module.exports = {
	getAll: function (options, cb) {
	     request.get("https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel", function (err, resp, body) {
			body = JSON.parse(body)
			console.log(2222)
			cb(err, resp, body);
	    })
	}
}