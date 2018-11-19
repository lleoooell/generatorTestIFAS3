'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newEleve;

describe('Eleve API:', function() {
  describe('GET /api/eleves', function() {
    var eleves;

    beforeEach(function(done) {
      request(app)
        .get('/api/eleves')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          eleves = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(eleves).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/eleves', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/eleves')
        .send({
          name: 'New Eleve',
          info: 'This is the brand new eleve!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newEleve = res.body;
          done();
        });
    });

    it('should respond with the newly created eleve', function() {
      expect(newEleve.name).to.equal('New Eleve');
      expect(newEleve.info).to.equal('This is the brand new eleve!!!');
    });
  });

  describe('GET /api/eleves/:id', function() {
    var eleve;

    beforeEach(function(done) {
      request(app)
        .get(`/api/eleves/${newEleve._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          eleve = res.body;
          done();
        });
    });

    afterEach(function() {
      eleve = {};
    });

    it('should respond with the requested eleve', function() {
      expect(eleve.name).to.equal('New Eleve');
      expect(eleve.info).to.equal('This is the brand new eleve!!!');
    });
  });

  describe('PUT /api/eleves/:id', function() {
    var updatedEleve;

    beforeEach(function(done) {
      request(app)
        .put(`/api/eleves/${newEleve._id}`)
        .send({
          name: 'Updated Eleve',
          info: 'This is the updated eleve!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedEleve = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedEleve = {};
    });

    it('should respond with the updated eleve', function() {
      expect(updatedEleve.name).to.equal('Updated Eleve');
      expect(updatedEleve.info).to.equal('This is the updated eleve!!!');
    });

    it('should respond with the updated eleve on a subsequent GET', function(done) {
      request(app)
        .get(`/api/eleves/${newEleve._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let eleve = res.body;

          expect(eleve.name).to.equal('Updated Eleve');
          expect(eleve.info).to.equal('This is the updated eleve!!!');

          done();
        });
    });
  });

  describe('PATCH /api/eleves/:id', function() {
    var patchedEleve;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/eleves/${newEleve._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Eleve' },
          { op: 'replace', path: '/info', value: 'This is the patched eleve!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedEleve = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedEleve = {};
    });

    it('should respond with the patched eleve', function() {
      expect(patchedEleve.name).to.equal('Patched Eleve');
      expect(patchedEleve.info).to.equal('This is the patched eleve!!!');
    });
  });

  describe('DELETE /api/eleves/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/eleves/${newEleve._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when eleve does not exist', function(done) {
      request(app)
        .delete(`/api/eleves/${newEleve._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
