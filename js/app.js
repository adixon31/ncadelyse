var app = angular.module("adelyse",['ngRoute', 'ngAnimate', 'ui.bootstrap']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider	
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'MainController'
	})
	.when('/home', {
		templateUrl: 'views/home.html',
		controller: 'MainController'
	})
	.when('/about', {
		templateUrl: '/views/about.html',
		controller: 'MainController'
	})
	.when('/portfolio', {
		templateUrl: '/views/portfolio.html',
		controller: 'MainController'
		
	})
	.when('/features', {
		templateUrl: '/views/features.html',
		controller: 'MainController'
		
	})
	.when('/contact', {
		templateUrl: '/views/contact.html',
		controller: 'MainController'
		
	})
	.when('/portfolioPiece', {
		templateUrl: '/views/portfolioPiece.html',
		controller: 'MainController'
		
	})
	.when('/portfolioPiece#myCarousel', {
		templateUrl: '/views/portfolioPiece.html',
		controller: 'MainController'
		
	})
	
	$locationProvider.html5Mode({
  		enabled: true,
  		requireBase: false
	});
});
app.animation('.reveal-animation', function() {
  return {
    enter: function(element, done) {
      element.css('display', 'none');
      element.fadeIn(2000, done);
      return function() {
        element.stop();
      }
    },
    leave: function(element, done) {
      element.fadeOut(2000, done)
      return function() {
        element.stop();
      }
    }
  }
});
