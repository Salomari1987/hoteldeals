// Define states
var states = [{ 
	name: 'index', 
  	state: { 
  		url: '/list', 
  		templateUrl: 'app/listView/listView.html', 
  		controller: 'ListController'
  	}
  }]

angular.module('hoteldeals', [
  'ui.router',
  'ui.bootstrap',
  'hoteldeals.services',
	'hoteldeals.list'
  ])

.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
  $urlRouterProvider.otherwise('/list');
  
  angular.forEach(states, function (state) {
    $stateProvider.state(state.name, state.state);
  });

  $httpProvider.interceptors.push('AttachHeaders');
})

.factory('AttachHeaders', function ($window) {

  var attach = {
    request: function (config) {
      if (config.url.startsWith('template/') || config.url.startsWith('uib/')) {
        // Not modifying requests to these urls, 
        // as they are angular template cache requests
        return config;
      } else {
        config.params = config.params || {};
        config.headers['Allow-Control-Allow-Origin'] = '*';
        return config;
      }
    }
  };
  return attach;
})
