(function() {
  'use strict';

  angular.module('brianWebAngular')
    .directive('contactForm', function() {
      return {
        restrict: 'E',
        templateUrl: 'app/components/contactForm/contactForm.html',
        controller: function($scope) {
          $scope.activeSkill = 0;
          $scope.setActiveSkill = function(id) {
            $scope.activeSkill = id;
          }
        }
      };
    });
})();
