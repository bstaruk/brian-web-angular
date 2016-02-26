(function() {
  'use strict';

  angular.module('brianWebAngular')
    .directive('contactForm', function() {
      return {
        restrict: 'E',
        templateUrl: 'app/components/contactForm/contactForm.html',
        controller: function($scope, $http, $window) {

          $scope.errors = {};
          $scope.submitted = false;

          $scope.sendMail = function() {
            var apiURL = 'https://api.sendgrid.com/api/mail.send.json',
            mailJSON ={
              'api_user': 'bstaruk',
              'api_key': 'w-RTWPlyQGmzZDoaBwwEww',
              'to[]': 'bstaruk@gmail.com',
              'toname[]': 'Brian Staruk',
              'subject': 'Contact Form Submission - brian.staruk.me',
              'text': 'this is a test email',
              'from': 'noreply@staruk.me'
            };
            $http.post(apiURL, mailJSON).
            success(function(data, status, headers, config) {
              $window.console.log('successful email send.');
              $window.console.log('status: ' + status);
              $window.console.log('data: ' + data);
              $window.console.log('headers: ' + headers);
              $window.console.log('config: ' + config);
            }).error(function(data, status) {
              $window.console.log('error sending email.');
              $window.console.log('status: ' + status);
            });
            $window.console.log(mailJSON);
          };

          $scope.notSubmitted = function() {
            $scope.submitted = false;
          };

          $scope.handleForm = function(form) {
            $scope.submitted = true;
            $window.console.log(form);
            $scope.sendMail();
          };
        }
      };
    });
})();
