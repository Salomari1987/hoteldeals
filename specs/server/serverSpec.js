'use strict';
var path = require('path');
var expect = require('chai').expect;
var server = require(path.join(__dirname, '..', '..', './server.js'));

describe('server()', function () {
  'use strict';
  it('exists', function () {
    expect(server).to.be.a('function');
  });
});
