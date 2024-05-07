import {use, should} from 'chai';
import chaiHttp from 'chai-http';
import app from '../server.js'

let mongoose = require("mongoose");

const chai = use(chaiHttp);
should();
describe("Create a user", ()=>{
  describe("POST /api/users", ()=> {
    it("should save a user to the db", (done)=> {
      chai.request(app)
        .post('/api/users')
        .end((err,res)=>{
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });
  // etc
})
describe('Test /', ()=>{
  describe('register a new user', ()=>{
    // stub in db connection
    // it: user already exists
    // it: invalid user data
    // it: successful user submission
    // it: redirects to (?)
  });
});

describe('Test /auth', ()=> {
  describe('login user', ()=> {
    // db connect
    // it: user does not exist
    // it: invalid login credentials
    // it: successful login
    // it: redirects to (?)
  });
});

describe('Test /logout', ()=> {
  describe('logout user', ()=> {
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