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
              title: 'HTML, CSS & JS'
            },
            {
              id: 2,
              title: 'jQuery'
            },
            {
              id: 3,
              title: 'AngularJS',
              heart: true
            },
            {
              id: 4,
              title: 'ReactJS'
            },
            {
              id: 5,
              title: 'PHP'
            },
            {
              id: 6,
              title: 'LAMP System Ops'
            }
          ];
        }
      };
    });
})();
