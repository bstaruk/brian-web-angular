(function () {
	'use strict';

	angular
		.module('brianWebAngular')
		.controller('MainController', function (PageMeta, Analytics, moment) {

			PageMeta.reset();
			PageMeta.set('title', 'Brian Staruk - Web Developer from Boston, MA');
			PageMeta.set('description', 'Life\'s a garden... dig it!');

			Analytics.trackPage('/', 'Home');

			var vm = this;
			vm.title = 'About Me';
			vm.age = moment().diff('1987-06-30', 'years'); // you're only as old as you feel
		});

})();
