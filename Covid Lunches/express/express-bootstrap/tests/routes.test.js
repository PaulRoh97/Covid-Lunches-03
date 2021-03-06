const covid = require("../routes/covid");
const request = require("supertest");
const express = require("express");
const app = require("../app.js");
const { accounts } = require("../models");
// const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use("/", covid);

test("main route works", done => {
    request(app)
      .get("/")
      .expect(200, done);
  });
  
test("testing login route works", done => {
  request(app)
    .post("/sign-in")
    .type("form")
    .send({ email: "test@test.com", password: "password123" })
    .then(() => {
      request(app)
        .get("/inner-page")
        .expect(200, done);
    });
});


test("testing sign up route works", done => {
    request(app)
      .post("/sign-up")
      .type("form")
      .send({ email: "test12@test.com", firstName: "Johnny12", lastName: "Doe12", password: "Password1@#$" })
      .expect(302, done);
});
