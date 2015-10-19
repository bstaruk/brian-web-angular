(function () {
	'use strict';

	angular
		.module('brianWebAngular')
		.run(runBlock);

	/** @ngInject */
	function runBlock($log) {

		$log.debug('runBlock end');
	}

})();
