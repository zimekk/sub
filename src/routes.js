const path = require("path");

const { Router, json, static } = require("express");

const data = {};

module.exports = new Router()
  .use(json())
  .get("/api", (req, res) => res.send(data))
  .use("/assets", static(path.resolve(__dirname, "./assets")));
