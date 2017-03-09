// Define states
var states = [{ 
  name: 'index', 
  state: { 
    url: '/hotels', 
    views: {
      'list': {
        templateUrl: 'app/listView/listView.html', 
        controller: 'ListController'
      },
      'filter': {
        templateUrl: 'app/filterView/filterView.html',
        controller: 'FilterController'
      }
    }
  }
}]

angular.module('hoteldeals', [
  'ui.router',
  'ui.bootstrap',
  'hoteldeals.services',
	'hoteldeals.list',
  'hoteldeals.filter'
  ])

.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
  $urlRouterProvider.otherwise('/hotels');
  
  angular.forEach(states, function (state) {
    $stateProvider.state(state.name, state.state);
  });

  $httpProvider.interceptors.push('AttachHeaders');
})

.factory('AttachHeaders', function ($window) {

  var attach = {
    request: function (config) {
      config.params = config.params || {};
      config.headers['Allow-Control-Allow-Origin'] = '*';
      return config;
    }
  };
  return attach;
})
