(function () {
	'use strict';

	angular
		.module('brianWebAngular')
		.controller('MainController', function (PageMeta) {

			PageMeta.reset();
			PageMeta.set('title', 'Brian Staruk - Web Developer from Boston, MA');
			PageMeta.set('description', 'Life\'s a garden... dig it!');

			var vm = this;
			vm.title = 'about me';

		});

})();
