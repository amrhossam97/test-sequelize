const chai = require("chai");
const should = chai.should();
const request = require("supertest");
const app = require("../server");

describe(" POST /", function () {
    
  it("Add users", function () {
    request(app)
      .post("/api/users/add")
      .send({ name: "ahmed", age: 20, address:"cairo" })
      .end((err,res)=>{
          res.status.should.be.equal(201);
              })
  });
  it("Add books", function () {
    request(app)
      .post("/api/books/add")
      .send({ title: "test", description:"test" })
      .end((err,res)=>{
          res.status.should.be.equal(201);
              })
  });
  it("Add sales", function () {
    request(app)
      .post("/api/sales/add")
      .send({ name: "ahmed", age: 20, address:"cairo" , salary:500})
      .end((err,res)=>{
          res.status.should.be.equal(201);
              })
  });


});
