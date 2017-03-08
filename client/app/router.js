var states = [
  { name: 'index', state: { url: '/list', templateUrl: 'app/listView/listView.html', controller: 'ListController'}}
  ]

.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
  $urlRouterProvider.when('/', '/list');

  angular.forEach(states, function (state) {
    $stateProvider.state(state.name, state.state);
  });
    // We add our $httpInterceptor into the array
    // of interceptors. Think of it like middleware for your ajax calls
  $httpProvider.interceptors.push('AttachSessionId');
})