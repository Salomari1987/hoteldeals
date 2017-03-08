describe('services', function () {
  var $window

  beforeEach(angular.mock.module('hoteldeals'));

  describe('Deals factory', function() {
  	var Deals;

	    beforeEach(inject(function(_Deals_) {
	      Deals = _Deals_;
	    }));

	    // Verify our service exists
	    it('Deals should exist', function() {
	      expect(Deals).toBeDefined();
	    });

	    it('getAll should exist', function() {
	      expect(Deals.getAll).toBeDefined();
	      expect(typeof Deals.getAll).toBe('function');
	    });

	    it('getFiltered should exist', function() {
	      expect(Deals.getFiltered).toBeDefined();
	      expect(typeof Deals.getFiltered).toBe('function');
	    });

	    describe('getAll', function() {
	    	
	    });

	    describe('getFiltered', function() {
	    
	    });
	})
})