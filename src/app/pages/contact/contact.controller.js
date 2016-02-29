(function () {
	'use strict';

	angular
		.module('brianWebAngular')
		.controller('ContactController', function (PageMeta, Analytics) {

			PageMeta.reset();
			PageMeta.set('title', 'Contact Me - brian.staruk.me');
			PageMeta.set('description', 'How to get in touch if you found my wallet or want to hire me or something.');

			var vm = this;
			vm.title = 'Contact Me';

			Analytics.trackPage('/contact', 'Contact');

		});

})();
