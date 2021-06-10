const chai = require("chai");
const should = chai.should();
const request = require("supertest");
const app = require("../server");

describe(" GET /", function () {
  it("return users", function () {
    request(app).get("/api/users/all").expect(200);
  });

  it("return books", function () {
    request(app).get("/api/books/all").expect(200);
  });

  it("return sales", function () {
    request(app).get("/api/sales/all").expect(200);
  });
});
