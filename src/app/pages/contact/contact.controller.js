(function () {
	'use strict';

	angular
		.module('brianWebAngular')
		.controller('ContactController', function (PageMeta) {

			PageMeta.reset();
			PageMeta.set('title', 'Contact Me - brian.staruk.me');
			PageMeta.set('description', 'How to get in touch if you found my wallet or want to hire me or something.');

			var vm = this;
			vm.title = 'contact me';

		});

})();
