(function () {
	'use strict';

	angular.module('brianWebAngular')
		.directive('skills', function () {
			return {
				restrict: 'E',
				templateUrl: 'app/components/skills/skills.html',
				controller: function ($scope, $anchorScroll, SKILLS_OF_AN_ARTIST) {
					$scope.skills = SKILLS_OF_AN_ARTIST;
					$scope.activeSkill = 0;
					$scope.setActiveSkill = function (id) {
						$scope.activeSkill = id;
						$anchorScroll('skillsClear');
					}
				}
			};
		});
})();
