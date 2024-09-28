import {use, should} from 'chai';
import chaiHttp from 'chai-http';
import app from '../server.js'

const chai = use(chaiHttp);
should();
describe("Create a user", ()=>{
  describe("POST /api/users", ()=> {
    it("should save a user to the db", (done)=> {
      let user = {
        name: "Delete Me",
        email: "delete@me.com",
        password: "safetacomountain5"
      }
      chai.request(app)
        .post('/api/users')
        .send(user)
        .end((err,res)=>{
          res.should.have.status(201);
          res.body.should.be.a('object');
          done();
        });
    });
    it("should fail to save the same user to the db", (done)=> {
      let user = {
        name: "Delete Me",
        email: "delete@me.com",
        password: "safetacomountain5"
      }
      chai.request(app)
        .post('/api/users')
        .send(user)
        .end((err,res)=>{
          res.should.have.status(400);
          res.body.should.be.a('object');
          done();
        });
    });
    it("should fail to save incomplete submission", (done)=> {
      chai.request(app)
        .post('/api/users')
        .send()
        .end((err,res)=>{
          res.should.have.status(500);
          res.body.should.be.a('object');
          done();
        });
    })
  });
});
describe('Test /api/users/auth', ()=> {
  describe('authenticate user', ()=> {
    it('should login a user', (done)=> {
      let user = {
        email: "delete@me.com",
        password: "safetacomountain5"
      }

      chai.request(app)
        .post('/api/users/auth')
        .send(user)
        .end((err,res)=>{
          res.should.have.status(201);
          res.body.should.be.a('object');
          done();
        });
    })
  });
});
describe("Delete a user", ()=>{
  describe("POST /api/users", ()=> {
    it('should delete a user from the db', (done) => {
      let user = {
        email: "delete@me.com",
      }

      chai.request(app)
        .delete('/api/users')
        .send(user)
        .end((err,res)=>{
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    })
    it('should error when trying to delete a non-existing user', (done)=> {
      let user = {
        email: "nothere@email.com",
      }

      chai.request(app)
        .delete('/api/users')
        .send(user)
        .end((err,res)=>{
          res.should.have.status(404);
          res.body.should.be.a('object');
          done();
        })
    })
  });
});
describe('Test /logout', ()=> {
  describe('logout user', ()=> {
    // chai.request(app)
    //   .post('/api/users/logout')

    // it: logs the user out
    // it: redirects to (?)
  });
});

describe('Test /profile', ()=> {
  describe('list user profiles', ()=> {
    // it: gets all users
  });
  describe('show a specific user profile', ()=> {
    // it: show user id(x)
  });
  describe('update a user', ()=> {
    // it: changes a user attribute
  })
});