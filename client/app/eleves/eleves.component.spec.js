'use strict';

describe('Component: ElevesComponent', function() {
  // load the controller's module
  beforeEach(module('yeomanTestApp.eleves'));

  var ElevesComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ElevesComponent = $componentController('eleves', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
