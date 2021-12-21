import app from '../app.js';
import supertest from 'supertest';

const request = supertest(app);

describe('POST /', () => {
  describe('user gives a cityName', () => {
    it('status code is 200', async () => {
      const response = await request
        .post('/weather')
        .send({ cityName: 'Cairo' });

      expect(response.statusCode).toBe(200);
    });

    it('should specify json in the content type header', async () => {
      const response = await request
        .post('/weather')
        .send({ cityName: 'Cairo' });
      expect(response.headers['content-type']).toEqual(
        expect.stringContaining('json')
      );
    });
  });

  describe('user does not give a cityName or an invalid one', () => {
    it('status code 400', async () => {
      const response = await request
        .post('/weather')
        .send({ cityName: 'dverbdfb' });

      expect(response.statusCode).toBe(400);
    });

    it('return object {"weatherText": "City is not found!"}', async () => {
      const response = await request.post('/weather').send({ cityName: '' });

      expect(response.body).toHaveProperty('weatherText', 'City is not found!');
    });
  });
});
