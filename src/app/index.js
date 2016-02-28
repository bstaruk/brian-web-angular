(function () {
	'use strict';

	angular.module('brianWebAngular', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router'])
		.config(function ($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: 'app/pages/main/main.html',
					controller: 'MainController',
					controllerAs: 'main'
				})
				.state('contact', {
					url: '/contact',
					templateUrl: 'app/pages/contact/contact.html',
					controller: 'ContactController',
					controllerAs: 'contact'
				});
			$urlRouterProvider.otherwise('/');
		})
		.run(function ($rootScope, $window, $location, $timeout, $state, PageMeta) {
			$rootScope.state = $state;
			$rootScope.PageMeta = PageMeta;
		});

})();
