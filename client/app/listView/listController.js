angular.module('hoteldeals.list', [])
.controller('ListController',
  function ($scope, $rootScope, Deals) {
  	$rootScope.data = {
      offers: 0
    }
    
    if (!$rootScope.data.offers) {
      Deals.getAll()
      .then(function (resp) {
        console.log(resp.offers)
        $rootScope.data.offers = resp.offers.Hotel
      })
    };

    $scope.$watch(function() {
      return $rootScope.data.offers;
    }, function() {
      $scope.data.offers = $rootScope.data.offers;
    }, true);

  	$scope.starRating = function (rating) {
  		rating = parseFloat(rating)
  		if (rating > 4.5) {
  			return "Exceptional!"
  		} else if (rating > 4){
  			return "Excellent!";
  		} else if (rating > 3) {
  			return "Good!"
  		} else {
  			return
  		}
  	}
  });