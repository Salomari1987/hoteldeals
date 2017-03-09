var request = require('request')
module.exports = {
	getAll: function (cb, url) {
		request.get(url, function (err, resp, body) {
			body = JSON.parse(body)
			cb(err, resp, body);
		})
	}
}