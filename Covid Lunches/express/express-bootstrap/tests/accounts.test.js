const covid = require("../routes/covid");

const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", covid);

test("main route works", done => {
    request(app)
      .get("/")
      .expect({ name: "Covid Lunches" })
      .expect(200, done);
  });
  
  test("testing route works", done => {
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