(function () {
	'use strict';

	angular
		.module('brianWebAngular')
		.config(config);

	/** @ngInject */
	function config($logProvider) {
		// Enable log
		$logProvider.debugEnabled(true);
	}

})();
