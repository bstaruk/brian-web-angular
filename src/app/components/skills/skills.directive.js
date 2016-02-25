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
              desc: 'I\'ve been building websites since I was about 10 years old and have always had a passion for writing clean, logical code. Having been around since the days of marquee tags, tables and wrestling with IE6, I have observed and adapted to the growth of these technologies since their humble beginnings.'
            },
            {
              id: 1,
              title: 'jQuery',
              desc: 'The OG of modern web development. It isn\'t used as much as it once was, but I used jQuery for nearly a decade and it\'ll always have a special place in my heart... like a family dog that ate your shoes every once in a while, and did not age gracefully at all, but was otherwise pretty chill.'
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
              desc: 'I\'ve used it with great success (very nice), and while I do prefer Angular for most projects, I\'m happy to have React in my toolbet and appreciate it\'s value for UI-heavy apps.'
            },
            {
              id: 4,
              title: 'PHP',
              desc: 'I\'ve been creating with PHP since I was a teenager and have always enjoyed the versatility and accessibility of the language and it\'s  community. There are a lot of PHP-haters out there, but it\'s served me well over the years and I am proud of (most of) the work I have done with it.'
            },
            {
              id: 5,
              title: 'WordPress',
              desc: 'I have made dozens of sites with WordPress and would consider it to be a specialty of sorts. I have expert-level knowledge of crafting plugins and themes, and have learned how to build and maintain WP sites with amazing success throughout my 5+ years working with it.'
            },
            {
              id: 6,
              title: 'LAMP System Ops',
              desc: 'My experience with hosting production servers is limited, but I host all of my own web servers and I do a damn-fine job of it (my mom says so, anyways). I\'d make Ubuntu my primary dev OS, if Photoshop would only support it officially.'
            },
            {
              id: 7,
              title: 'Java',
              desc: 'My experience with Java is almost exclusively within the Android SDK and developing Android apps. I have built a couple of them over the years, and have learned a ton in my tinkering, but my Java-fu is at a hobbyist level.'
            }
          ];

          $scope.activeSkill = 0;
          $scope.setActiveSkill = function(id) {
            $scope.activeSkill = id;
          }

        }
      };
    });
})();
