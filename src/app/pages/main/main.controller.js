(function () {
	'use strict';

	angular
		.module('brianWebAngular')
		.controller('MainController', function (PageMeta, Analytics) {

			PageMeta.reset();
			PageMeta.set('title', 'Brian Staruk - Web Developer from Boston, MA');
			PageMeta.set('description', 'Life\'s a garden... dig it!');

			Analytics.trackPage('/', 'Home');

			var vm = this;
			vm.title = 'About Me';

		});

})();
