(function() {
  'use strict';

  angular.module('brianWebAngular')
    .directive('contactForm', function() {
      return {
        restrict: 'E',
        templateUrl: 'app/components/contactForm/contactForm.html',
        controller: function($scope) {
          $scope.errors = {};
          $scope.submitted = false;
          $scope.notSubmitted = function() {
            $scope.submitted = false;
          };
          $scope.handleForm = function(form) {
            $scope.submitted = true;
            window.console.log(form);
          };
        }
      };
    });
})();
