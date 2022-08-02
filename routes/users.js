var express = require("express");
var router = express.Router();
var Client = require("../db/models/Client");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const clients = await Client.find();
  res.json(clients);
});

module.exports = router;
