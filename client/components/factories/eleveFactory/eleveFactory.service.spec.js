'use strict';

describe('Service: eleveFactory', function() {
  // load the service's module
  beforeEach(module('yeomanTestApp.eleveFactory'));

  // instantiate service
  var eleveFactory;
  beforeEach(inject(function(_eleveFactory_) {
    eleveFactory = _eleveFactory_;
  }));

  it('should do something', function() {
    expect(!!eleveFactory).to.be.true;
  });
});
