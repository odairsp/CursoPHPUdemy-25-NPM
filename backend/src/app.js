const express = require("express");
const { teste, user, person } = require("./helpers");

const app = express();

app.get("/", function (request, response) {
  response.send(teste());
});

app.listen(3000);
