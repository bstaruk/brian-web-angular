(function () {
	'use strict';

	angular.module('brianWebAngular')
		.directive('socialLinks', function () {
			return {
				restrict: 'E',
				templateUrl: 'app/components/socialLinks/socialLinks.html',
				controller: function ($scope) {
					$scope.links = [
						{
							id: 0,
							title: 'Facebook',
							icon: 'fa-facebook',
							url: 'https://www.facebook.com/brian.staruk'
						},
						{
							id: 1,
							title: 'Google+',
							icon: 'fa-google-plus',
							url: 'https://plus.google.com/+BrianStaruk'
						},
						{
							id: 2,
							title: 'LinkedIn',
							icon: 'fa-linkedin',
							url: 'https://www.linkedin.com/in/brian-staruk-8370632a'
						}
					];
				}
			};
		});
})();
