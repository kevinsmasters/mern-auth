var assert = require('assert');
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