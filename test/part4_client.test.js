'use strict';

process.env.NODE_ENV = 'test';


const { suite, test } = require('mocha');
const request = require('supertest');
const app = require('../app');


suite('Part 4: User should be able to access the site from the browser.', () => {

  test('GET /index.html', (done) => {
    /* eslint-disable max-len */
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200, done);

      /* eslint-enable max-len */
  });

});
