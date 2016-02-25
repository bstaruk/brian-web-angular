(function() {
  'use strict';

  angular
    .module('brianWebAngular')
    .directive('masthead', masthead);

  /** @ngInject */
  function masthead() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/masthead/masthead.html',
      controller: MastheadController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function MastheadController() {
    }
  }

})();
