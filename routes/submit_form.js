var express = require("express");
var path = require("path");
var router = express.Router();

router.post("/submit_form", function (req, res, next) {
  console.log(req.body.walletKey);
  res.end();
});

module.exports = router;
