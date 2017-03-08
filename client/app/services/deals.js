angular.module('hoteldeals.services', [])

// Factory to manage all deals http communications with backend
.factory('Deals', function ($window, $http) {
  
  var getAll = function () {
    // Send GET http request to fetch all deals from backend
  };

  var getFiltered = function () {
    // Send GET http request to fetch a filtered list from backend
  };

  return {
  	getAll: getAll,
  	getFiltered: getFiltered
  }
})
