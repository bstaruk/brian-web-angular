(function () {
	'use strict';

	angular
		.module('brianWebAngular')
		.controller('ContactController', function (PageMeta) {

			PageMeta.reset();
			PageMeta.set('title', 'Contact Me - brian.staruk.me');
			PageMeta.set('description', 'Personal website of Boston-based Web Developer, Brian Staruk.');

			var vm = this;
			vm.title = 'contact me';

		});

})();
