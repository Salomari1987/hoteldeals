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
			console.log(typeof getAll)
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
		}).timeout(5000)
	})
	describe('GetFiltered', function () {
		var server, app
		beforeEach(function () {
		    server = require(path.join(__dirname, '..', '..', './server.js')).server;
		    app = require(path.join(__dirname, '..', '..', './server.js')).app
		 });

		afterEach(function () {
			server.close();
		});
		it('should call api with filtered results and return reponse', function (done) {
			request(app)
			.post('/api/deals')
			.send({
				filters: {
					destinationName:"Florence",
					minTripStartDate: "2017-05-03"	
				}
			})
			.expect(200)
			.expect(function(res){
				expect(res.body).to.be.a('object')
				expect(Object.keys(res.body)).to.deep.equal(["offerInfo", "userInfo", "offers"])
				expect(res.body.offers.Hotel).to.an('undefined')
			})
			.end(done)
		}).timeout(5000);

		it('should call api with filtered results and return filtered reponse', function (done) {
			request(app)
			.post('/api/deals')
			.send({
				filters: {
					destinationName:"Florence"
				}
			})
			.expect(200)
			.expect(function(res){
				var flag = false;
				expect(res.body).to.be.a('object')
				expect(Object.keys(res.body)).to.deep.equal(["offerInfo", "userInfo", "offers"])
				for (var i = 0; i < res.body.offers.Hotel; i++) {
					if (res.body.offers.Hotel[i].destination.city !== "Florence") {
						flag = true
					}
				}
				expect(flag).to.not.be.true
			})
			.end(done)
		}).timeout(5000)

	})

})