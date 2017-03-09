describe('services', function () {
  var $window

  beforeEach(angular.mock.module('hoteldeals'));

  describe('Deals factory', function() {
  	var Deals, $httpBackend;

	    beforeEach(inject(function(_Deals_, _$httpBackend_) {
	      Deals = _Deals_;
	      $httpBackend = _$httpBackend_
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
	    	var result, API, RESPONSE_SUCCESS;

	    	beforeEach(function() {
		  		// Initialize our local result object to an empty object before each test
		  		result = {};

		  		// Initialize url to be called by service
		  		API = "/api/deals";

		  		// Initialize response
		  		RESPONSE_SUCCESS = {
		  			status: "success",
		  			data: {
		  				offerInfo: {},
		  				userInfo: {}, 
		  				offers: []
		  			}
		  		};

	  		  	// Spy on our service call but allow it to continue to its implementation
		  		spyOn(Deals, "getAll").and.callThrough();
		    });
		    it('should return all deals', function() {
		        // Declare the endpoint we expect our service to hit and provide it with our mocked return values
		        $httpBackend.when('GET', API).respond(RESPONSE_SUCCESS);
		        $httpBackend.when('GET', 'app/listView/listView.html').respond(RESPONSE_SUCCESS);
		        $httpBackend.when('GET', 'app/filterView/filterView.html').respond(RESPONSE_SUCCESS);

		        expect(Deals.getAll).not.toHaveBeenCalled();
		        expect(result).toEqual({});

		        Deals.getAll()
		        .then(function(res) {
		          result = res;
		        });

		        // Flush pending HTTP requests
		        $httpBackend.flush();

		        expect(Deals.getAll).toHaveBeenCalled();
		        expect(result.data.offerInfo).toEqual({});
		        expect(typeof result.data.offers).toBe("object");
		    });
	    });

	    describe('getFiltered', function() {
	    
	    });
	})
})