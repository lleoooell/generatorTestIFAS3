'use strict';
const angular = require('angular');

/*@ngInject*/
export function eleveFactoryService($resource) {
  // Service logic
  // ...

  var meaningOfLife = 42;

  // Public API here
  return {
    elevesListe() {
      return $resource('api/eleves/:eleveId', {
            eleveId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
  };
}


export default angular.module('yeomanTestApp.eleveFactory', [])
  .factory('eleveFactory', eleveFactoryService)
  .name;
