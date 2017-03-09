angular.module('hoteldeals.services', [])

// Factory to manage all deals http communications with backend
.factory('Deals', function ($window, $http) {
  
  var getAll = function () {
    // Send GET http request to fetch all deals from backend
    return $http({
      method: 'GET',
      url: '/api/deals'
    })
    .then(function (resp) {
      // return http response body to controller
      return resp.data;
    })
    .catch(function (err) {
      // if error is sent back by API, log it in console
      console.log(err);
    });
  };

  var getFiltered = function (data) {
    // Send GET http request to fetch a filtered list from backend
    return $http({
      method: 'POST',
      url: '/api/deals',
      data: {
        filters:data
      }
    })
    .then(function (resp) {
      return resp.data;
    })
    .catch(function(err) {
      console.log(err)
    })
  };

  return {
  	getAll: getAll,
  	getFiltered: getFiltered
  }
})
