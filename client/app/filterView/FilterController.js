angular.module('hoteldeals.filter', [])
.controller('FilterController',
  function ($scope, $rootScope, Deals, $location) {
  	$scope.data = {}
    $scope.model = {}
    $scope.model.ratings = [5, 4, 3, 2, 1, 0]

    $scope.submit = function () {
      Deals.getFiltered($scope.data)
      .then(function (resp) {
        console.log(resp)
        $rootScope.data.offers = resp.offers.Hotel
        $location.path('/reload')
      })
    }
  });