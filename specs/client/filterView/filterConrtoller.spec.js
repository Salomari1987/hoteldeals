describe('FilterController', function() {
  var FilterController, $controller, scope, $rootScope, Deals, $q, deferred, $httpBackend;

  beforeEach(angular.mock.module('hoteldeals'));

  beforeEach(inject(function($controller, _$rootScope_, _Deals_, _$q_, _$httpBackend_) {
    $rootScope = _$rootScope_;
    $q = _$q_;
  	scope = _$rootScope_.$new();
  	deferred = _$q_.defer();
  	$httpBackend = _$httpBackend_
  	Deals = _Deals_

    FilterController = $controller('FilterController', {
      $rootScope: $rootScope, 
    	$scope: scope
    });
    spyOn(Deals, 'getFiltered').and.returnValue(deferred.promise)

	}));

  it('should exist', function() {
    expect(FilterController).toBeDefined();
  });

  it('should call filter service with data filtered data', function () {
  	scope.data = {
	  	destinationName: "Florence",
			destinationCity: "Florence",
			minTripStartDate:"2017-03-12",
			maxTripStartDate: "2017-05-12",
			lengthOfStay: "5",
			minStarRating: "2",
			maxStarRating: "4",
			maxTotalRate: "2000",
			minTotalRate: "1000",
			maxGuestRating: "17",
			minGuestRating: "0"	
  	}
  	deferred.resolve([]);
		$httpBackend.when('GET', 'app/listView/listView.html').respond([]);
		$httpBackend.when('GET', 'app/filterView/filterView.html').respond([]);
  	
  	scope.$apply();
  	
  	scope.submit()

  	expect(Deals.getFiltered).toHaveBeenCalledWith(scope.data);
  }) 
})