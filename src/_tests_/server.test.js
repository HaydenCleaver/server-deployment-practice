'use strict';

const supertest = require('supertest');
const { app } = require('../server');
const request = supertest(app);

describe('API Server', () => {
  test('handles invalid requests', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  });
  test('handles errors', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
    expect(response.body.route).toEqual('/bad');
    expect(response.body.message).toEqual('this is a bad route');
  });
  test('handles root path', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBeTruthy();
    expect(response.text).toEqual('Hello World');
  });

  test('handles \'/pet\' route without query param correctly', async () => {
    const response = await request.get('/pet');
    expect(response.text).toEqual('What a great animal companion');

  });

  test('handles \'/pet\' route with query param correctly', async () => {
    const response = await request.get('/pet?petName=Miji');
    expect(response.text).toEqual('Miji is awesome');

  });
});
