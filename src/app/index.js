(function () {
	'use strict';

	angular.module('brianWebAngular', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router'])
		.config(function ($stateProvider, $urlRouterProvider) {

			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: 'app/main/main.html',
					controller: 'MainController',
					controllerAs: 'main'
				})
				.state('about', {
					url: '/',
					templateUrl: 'app/about/about.html',
					controller: 'AboutController',
					controllerAs: 'about'
				});
			$urlRouterProvider.otherwise('/');

		})
		.run(function($rootScope, $window, $location, $timeout, $state) {
			$rootScope.state = $state;
		});

})();
