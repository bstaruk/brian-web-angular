(function () {
	'use strict';

	angular
		.module('brianWebAngular')
		.controller('MainController', function (PageMeta) {

			PageMeta.reset();
			PageMeta.set('title', 'About Me - brian.staruk.me');
			PageMeta.set('description', 'Personal website of Boston-based Web Developer, Brian Staruk.');

			var vm = this;
			vm.title = 'about me';

		});

})();
