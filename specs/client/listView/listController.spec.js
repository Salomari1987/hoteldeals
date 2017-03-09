describe('ListController', function() {
  var ListController, $controller, scope, $rootScope;

  beforeEach(angular.mock.module('hoteldeals'));

  beforeEach(inject(function($controller, _$rootScope_, _Deals_) {
    $rootScope = _$rootScope_;
  	scope = _$rootScope_.$new();
    ListController = $controller('ListController', {
      $rootScope: $rootScope, 
    	$scope: scope
    });
	}));

  it('should exist', function() {
    expect(ListController).toBeDefined();
  });

  it('should return wording for star rating', function() {
    var rating = scope.starRating("5.0")
    expect(rating).toEqual("Exceptional!")
  });
})