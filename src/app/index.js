(function () {
	'use strict';

	angular.module('brianWebAngular', [
			'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'angular-google-analytics'
		])
		.config(function ($stateProvider, $urlRouterProvider, AnalyticsProvider) {

			/*
			 Angular UI Router Config
			 https://github.com/angular-ui/ui-router
			 */
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

			/*
			 Angular Google Analytics Config
			 https://github.com/revolunet/angular-google-analytics
			 */
			AnalyticsProvider.setAccount('UA-27103712-1');
			AnalyticsProvider.trackPages(false);

		})
		.run(function ($rootScope, $window, $location, $timeout, $state, PageMeta) {
			$rootScope.state = $state;
			$rootScope.PageMeta = PageMeta;
		});

})();
