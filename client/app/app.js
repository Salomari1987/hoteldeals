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
  'hoteldeals.services',
	'hoteldeals.list'
  ])

.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
  $urlRouterProvider.otherwise('/list');
  
  angular.forEach(states, function (state) {
    $stateProvider.state(state.name, state.state);
  });
  
})
