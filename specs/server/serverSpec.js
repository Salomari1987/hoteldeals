'use strict';

var request = require('supertest');
var path = require('path');
var expect = require('chai').expect;

describe('server()', function () {
	var server, app;
	beforeEach(function () {
    server = require(path.join(__dirname, '..', '..', './server.js')).server;
    app = require(path.join(__dirname, '..', '..', './server.js')).app;
  });

  afterEach(function () {
    server.close();
  });

  it('exists', function () {
    expect(app).to.be.a('function');
  });

  it('responds to /', function testSlash(done) {
  	request(server)
    .get('/')
    .expect(200, done);
  });

  it('responds to /api/deals', function testSlash(done) {
  	request(server)
    .get('/api/deals')
    .expect(200, done);
  }).timeout(3500)

  it('404 everything else', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});
