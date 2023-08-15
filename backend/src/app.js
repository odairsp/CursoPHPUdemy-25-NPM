const express = require("express");
const { teste, user, person } = require("./helpers");

const app = express();

app.get("/", function (request, response) {
  response.send(teste(), user.name);
});

app.listen(3000);
