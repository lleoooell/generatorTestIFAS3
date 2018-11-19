'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './eleves.routes';

export class ElevesComponent {
  // eleveListe : Object[];

  /*@ngInject*/
  constructor($scope, $http,eleveFactory) {
    this.message = 'Hello';
    this.eleveListe = eleveFactory.elevesListe().query();
    // console.log(eleveListe);
  }
}

ElevesComponent.$inject = ["$scope", "$http", "eleveFactory"];

export default angular.module('yeomanTestApp.eleves', ["ui.router", "yeomanTestApp.eleveFactory"])
  .config(routes)
  .component('eleves', {
    template: require('./eleves.html'),
    controller: ElevesComponent,
    controllerAs: 'elevesCtrl'
  })
  .name;
