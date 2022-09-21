'use strict';

// const { test } = require('eslint/lib/rule-tester/rule-tester');
// const supertest = require('supertest');
// const { app } = require('../server');
// const request = supertest(app);

const stamper = require('../middleware/stamper');

describe('Stamper Middleware', () => {

  test('works as expected', async () => {
    let req = {};
    let res = {};
    let next = jest.fn();

    stamper(req, res, next);
    // const response = await request.get('/pet');
    // expect(response.time).toBeTruthy();
    // expect (response.time).toBeDefined();
    expect(req.time).toBeTruthy();
    expect(next).toHaveBeenCalled();
  });
});
