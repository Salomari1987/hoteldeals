var request = require('supertest');

var path = require('path');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var getHotels = require(path.join(__dirname, '..', '..', './services/hotelsSvc.js'));
var app = require(path.join(__dirname, '..', '..', './server.js'));

var assert = require('assert');
var sinon = require('sinon');
var PassThrough = require('stream').PassThrough;
var http = require('http');
require("chai").use(require("sinon-chai"));

describe('Services', function () {
	describe('Get All Hotels', function () {
		
		var getAll = getHotels.getAll
		it('should exist', function () {
			expect(getAll).to.be.a('function');
		});

		it('should call api and return reponse', function (done) {
			request(app)
			.get('/1')
			.expect(200)
			.expect(function(res){
				expect(res.body).to.be.a('object')
				console.log(res.body)
				expect(Object.keys(res.body)).to.deep.equal(["offerInfo", "userInfo", "offers"])

			})
			.end(done)
		}).timeout(3000)
	})
})