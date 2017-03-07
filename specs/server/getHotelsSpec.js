var path = require('path');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var getHotels = require(path.join(__dirname, '..', '..', './services/hotelsSvc.js'));

describe('Services', function () {
	describe('Get All Hotels', function () {
		var getAll = getHotels.getAll
		it('should exist', function () {
			expect(getAll).to.be.a('function');
		})

		it('should return an object', function () {
			expect(getAll()).to.be.a('object')
		})
	})
})