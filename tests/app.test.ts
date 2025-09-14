import request from 'supertest';
import app from '../src/app';

describe('GET /tasks', () => {
  it('responds with an empty array', async () => {
    const res = await request(app).get('/tasks');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });
});
