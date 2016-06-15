(function () {
	'use strict';

	angular.module('brianWebAngular')
		.directive('skills', function () {
			return {
				restrict: 'E',
				templateUrl: 'app/components/skills/skills.html',
				controller: function ($scope, $anchorScroll) {
					$scope.skills = [
						{
							id: 0,
							title: 'HTML, (S)CSS & JS',
							desc: 'I\'ve been building websites since I was about 10 years old and have always had a passion for writing clean, logical code. Having been around since the days of marquee tags, tables and wrestling with IE6, I have observed and adapted to the growth of these technologies since their humble beginnings.'
						},
						{
							id: 1,
							title: 'jQuery',
							desc: 'The OG of modern web development. It isn\'t utilized as much as it once was, but I used jQuery for nearly a decade and it\'ll always have a special place in my heart... like a family dog that ate your shoes every once in a while, and did not age gracefully at all, but was otherwise pretty chill.'
						},
						{
							id: 2,
							title: 'AngularJS',
							desc: 'I love Angular to pieces. It\'s a blast to work with and it opens up so many doors, creatively. This site is built with it, and so is my other project <a href="http://pricebtc.com" target="_blank">PriceBTC.com</a>.'
						},
						{
							id: 3,
							title: 'ReactJS',
							desc: 'I\'ve built with React and hold it in similar regard to Angular. Though it\'s rigid nature makes it a little less "magical" to develop on, the performance gains make it invaluable for UI-heavy projects.'
						},
						{
							id: 4,
							title: 'PHP',
							desc: 'I\'ve been creating with PHP since I was a teenager and have always enjoyed the versatility and accessibility of the language and it\'s  community. There are a lot of haters out there, but it\'s served me well over the years and I am proud of (most of) the work I have done with it.'
						},
						{
							id: 5,
							title: 'WordPress',
							desc: 'I have made dozens of sites with WordPress and consider it to be my specialty. I have expert-level knowledge of crafting plugins and themes, as well as system buildouts and maintenance. <a href="https://github.com/bstaruk/wordpress-starbase">I even maintain my own starter theme!</a>'
						},
						{
							id: 6,
							title: 'LAMP SysOps',
							desc: 'My professional experience with building and maintaining servers is centered around the LAMP stack. I manage all of my own web servers and have for years.'
						},
						{
							id: 7,
							title: 'Git',
							desc: 'I\'ve seen Git used in many ways by many teams over the years and even the worst implementations are vastly better than none at all. I wouldn\'t want to go back to living in a world without it.'
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
						$anchorScroll('skillsClear');
					}

				}
			};
		});
})();
