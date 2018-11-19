'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var eleveCtrlStub = {
  index: 'eleveCtrl.index',
  show: 'eleveCtrl.show',
  create: 'eleveCtrl.create',
  upsert: 'eleveCtrl.upsert',
  patch: 'eleveCtrl.patch',
  destroy: 'eleveCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var eleveIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './eleve.controller': eleveCtrlStub
});

describe('Eleve API Router:', function() {
  it('should return an express router instance', function() {
    expect(eleveIndex).to.equal(routerStub);
  });

  describe('GET /api/eleves', function() {
    it('should route to eleve.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'eleveCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/eleves/:id', function() {
    it('should route to eleve.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'eleveCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/eleves', function() {
    it('should route to eleve.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'eleveCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/eleves/:id', function() {
    it('should route to eleve.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'eleveCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/eleves/:id', function() {
    it('should route to eleve.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'eleveCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/eleves/:id', function() {
    it('should route to eleve.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'eleveCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
