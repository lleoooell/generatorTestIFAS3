'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('eleves', {
      url: '/eleves',
      template: '<eleves></eleves>'
    });
}
