'use strict';

process.env.NODE_ENV = 'test';


const { suite, test } = require('mocha');
const request = require('supertest');
const knex = require('../knex');
const server = require('../server');

suite('test messages route', () => {

  before((done) => {
  knex.migrate.latest()
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err);
    });
  });

  beforeEach((done) => {
    knex.seed.run()
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('GET /messages', (done) => {
    /* eslint-disable max-len */
    request(server)
      .get('/messages')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, [{
        id:1,
        name:'Criminal',
        message:'What Are You?'
      },{
        id:2,
        name:'Batman',
        message:'I\'m Batman'
      }], done);

      /* eslint-enable max-len */
  });

  test('GET /messages/:id', (done) => {
    /* eslint-disable max-len */
    request(server)
      .get('/messages/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        id:1,
        name:'Criminal',
        message:'What Are You?'
      }, done);

      /* eslint-enable max-len */
  });

  test('POST /messages', (done) => {
  /* eslint-disable max-len */
  request(messages)
    .post('/messages')
    .set('Accept', 'application/json')
    .send({
      name:'Batman',
      message:'To the batcave!'
    })
    .expect('Content-Type', /json/)
    .expect((res) => {
      delete res.body.createdAt;
      delete res.body.updatedAt;
    })
    .expect(200, {
      name:'Batman',
      message:'To the Batcave!'
    }, done);

    /* eslint-enable max-len */
  });

  test('PATCH /messages/:id', (done) => {
  /* eslint-disable max-len */
  request(server)
    .patch('/messages/1')
    .set('Accept', 'application/json')
    .send({
      name:'Criminal',
      message:'Who Are You?'
    })
    .expect('Content-Type', /json/)
    .expect((res) => {
      delete res.body.createdAt;
      delete res.body.updatedAt;
    })
    .expect(200, {
      id:1,
      name:'Criminal',
      message:'Who Are You?'
    }, done);

    /* eslint-enable max-len */
  });

  test('DELETE /messages/:id', (done) => {
    /* eslint-disable max-len */
    request(server)
      .del('/messages/3')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        delete res.body.createdAt;
        delete res.body.updatedAt;
      })
      .expect(200, {
        id: 3,
        name:'Batman',
        message:'To the Batcave!'
      }, done);

      /* eslint-enable max-len */
  });

});
