const express = require("express");
const router = express.Router();
router.get("/", function (req, res) {
  console.log("hello");
  res.json({
    message: "Hello from profile!",
  });
});

module.exports = router;
