'use strict';

angular.module('brianWebAngular')
	.service('PageMeta', function() {
		var defaultMeta = {
				title: 'brian.staruk.me'
			},
			meta = angular.copy(defaultMeta);

		return {
			meta: function() {return meta;},
			get: function(key) {
				if(meta[key]) {
					return meta[key];
				}
				return '';
			},
			set: function(key, value) {
				meta[key] = value;
			},
			reset: function() {meta = angular.copy(defaultMeta);}
		};
	});
