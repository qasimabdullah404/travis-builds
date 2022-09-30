const request = require('supertest')
const app = require('./index.js')

describe('Get route', () => {
  it('page should return hello world', async () => {
    const res = await request(app).get('/')
    expect(res.statusCode).toEqual(200)
    expect(res.text).toEqual("Hello, World!")
  })
})

afterAll(async () => { await app.close() })
