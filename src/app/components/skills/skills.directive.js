(function() {
  'use strict';

  angular.module('brianWebAngular')
    .directive('skills', function() {
      return {
        restrict: 'E',
        templateUrl: 'app/components/skills/skills.html',
        controller: function($scope) {
          $scope.skills = [
            {
              id: 1,
              title: 'HTML, CSS & JS',
              shown: false
            },
            {
              id: 2,
              title: 'jQuery',
              shown: false
            },
            {
              id: 3,
              title: 'AngularJS',
              shown: false
            },
            {
              id: 4,
              title: 'ReactJS',
              shown: false
            },
            {
              id: 5,
              title: 'PHP',
              shown: false
            },
            {
              id: 6,
              title: 'LAMP System Ops',
              shown: false
            }
          ];
        }
      };
    });
})();
