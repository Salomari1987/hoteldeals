var request = require('supertest');

var path = require('path');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var getHotels = require(path.join(__dirname, '..', '..', './services/hotelsSvc.js'));

describe('Services', function () {
	describe('Get All Hotels', function () {
		var server, app;
		beforeEach(function () {
		    server = require(path.join(__dirname, '..', '..', './server.js')).server;
		    app = require(path.join(__dirname, '..', '..', './server.js')).app
		 });

		afterEach(function () {
			server.close();
		});
		var getAll = getHotels.getAll
		it('should exist', function () {
			expect(getAll).to.be.a('function');
		});

		it('should call api and return reponse', function (done) {
			request(app)
			.get('/api/deals')
			.expect(200)
			.expect(function(res){
				expect(res.body).to.be.a('object')
				expect(Object.keys(res.body)).to.deep.equal(["offerInfo", "userInfo", "offers"])
			})
			.end(done)
		}).timeout(3500)
	})
})