(function () {
	'use strict';

	angular.module('brianWebAngular')
		.directive('skills', function () {
			return {
				restrict: 'E',
				templateUrl: 'app/components/skills/skills.html',
				controller: function ($scope) {
					$scope.skills = [
						{
							id: 0,
							title: 'HTML, (S)CSS & JS',
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
							desc: 'I love Angular to pieces. It\'s a blast to work with and it opens up so many doors, creatively. This site is built with it, and so is my other project PriceBTC.com.'
						},
						{
							id: 3,
							title: 'ReactJS',
							desc: 'I\'ve used React with great success (very nice). While I prefer Angular for most projects, I\'m happy to have React in my tool belt and appreciate it\'s value for UI-heavy apps.'
						},
						{
							id: 4,
							title: 'PHP',
							desc: 'I\'ve been creating with PHP since I was a teenager and have always enjoyed the versatility and accessibility of the language and it\'s  community. There are a lot of PHP-haters out there, but it\'s served me well over the years and I am proud of (most of) the work I have done with it.'
						},
						{
							id: 5,
							title: 'WordPress',
							desc: 'I have made dozens of sites with WordPress and would consider it to be a specialty of sorts. I have expert-level knowledge of crafting plugins and themes, as well as system buildouts and maintenance.'
						},
						{
							id: 6,
							title: 'LAMP System Ops',
							desc: 'My professional experience with building and maintaining servers is limited, but I run all of my own web servers and have for years.'
						},
						{
							id: 7,
							title: 'Git',
							desc: 'I\'ve seen Git used in many ways by many teams over the years and even the worst implementations are vastly better than none at all. I would\'nt want to go back to living in a world without it.'
						},
						{
							id: 8,
							title: 'Java',
							desc: 'My experience with Java is almost exclusively within the Android SDK. I have built a couple of them over the years, and have learned a ton in my tinkering, but I am a white belt in Java Fu.'
						}
					];

					$scope.activeSkill = 0;
					$scope.setActiveSkill = function (id) {
						$scope.activeSkill = id;
					}

				}
			};
		});
})();
