angular.module('hoteldeals.list', [])
.controller('ListController',
  function ($scope, $rootScope, Deals) {
  	$scope.data = {}
    Deals.getAll()
    .then(function (resp) {
    	console.log(resp.offers)
    	$scope.data.offers = resp.offers.Hotel
    })
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