const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./queries");
const PORT = 5000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
