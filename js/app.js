var app = angular.module("adelyse",['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider	
	.when('/', {
		
		templateUrl: 'views/home.html',
		controller: 'MainController',
		// resolve : {
		// 	currentAuth: function(LoginService) {
		// 		return LoginService.requireAuth();
		// 	}
		// }
	})
	.when('/about', {
		templateUrl: '/views/about.html',
		controller: 'MainController'
	})
	.when('/projects', {
		templateUrl: '/views/portfolio.html',
		controller: 'MainController',
		
	})
	.otherwise({
		redirectTo: '/',
	});
	$locationProvider.html5Mode({
  		enabled: true,
  		requireBase: false
});
});