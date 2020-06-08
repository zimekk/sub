const path = require("path");
const { promises: fs } = require("fs");

const { Router, json, static } = require("express");

const data = {};

module.exports = new Router()
  .use(json())
  .get("/api", (req, res) => res.send(data))
  .get("/readme", async (req, res) =>
    res.send(
      require("marked")(
        await fs.readFile(path.resolve(__dirname, "../../README.md"), "utf8")
      )
    )
  )
  .use("/assets", static(path.resolve(__dirname, "../assets")));
