const request  = require("supertest")
const server = require('../api/server')


it("should run the tests", function() {
    expect(true).toBe(true);
  });




  describe('jokes-router.js', () => {
    //get
    describe('GET/', () => {
        it ('should return a status 200', () => {
            request(server).get('/api/jokes').then(response => {
            expect(response.status).toBe(200)
        })
    })

        it("should return JSON", () => {
            request(server)
              .get("/api/jokes")
              .then(response => {
                expect(response.type).toMatch(/json/i);
            });
        });
    })

    //post
    describe('POST /register', () => {
        it('should register a new user', () => {
            request(server)
            .post('/api/auth/register')
            .send({
                username: "test",
                password: "test"
            })
            .then(res => {
                expect(res.status).toBe(201)
            })
        })
    })


    //login
    describe('LOGIN /login', () => {
        it('should register a new user', () => {
            request(server)
            .post('/api/auth/login')
            .then(response => {
                expect(response.type).toMatch(/json/i)
            })
            
        })
    })
})    