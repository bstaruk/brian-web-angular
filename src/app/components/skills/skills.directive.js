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
              id: 0,
              title: 'HTML, CSS & JS',
              desc: 'I\'ve been building websites since I was about 10 years old and have always had a passion for writing clean, logical code.'
            },
            {
              id: 1,
              title: 'jQuery',
              desc: 'The OG of modern web development. It isn\'t used as much as it once was, but I will always have a place in my heart for jQuery.'
            },
            {
              id: 2,
              title: 'AngularJS',
              desc: 'It\'s new(ish), it\'s amazing and I love it to pieces. This site is built with it, and so is my other project PriceBTC.com.',
              heart: true
            },
            {
              id: 3,
              title: 'ReactJS',
              desc: 'I\'ve used it with great success (very nice), and while I do prefer Angular for most projects, I\'m happy to have React in my toolbet.'
            },
            {
              id: 4,
              title: 'PHP',
              desc: 'I\'ve been creating with PHP since I was a teenager and have always enjoyed the versatility and accessibility of the language and it\'s  community.'
            },
            {
              id: 5,
              title: 'LAMP System Ops',
              desc: 'My experience with hosting production servers is limited, but I host all of my own web servers and I do a damn-fine job of it (my mom says so, anyways).'
            }
          ];

          $scope.activeSkill = null;
          $scope.setActiveSkill = function(id) {
            $scope.activeSkill = id;
          }

        }
      };
    });
})();
