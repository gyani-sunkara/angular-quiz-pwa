const express = require("express");
const router = express.Router();

// Auth middleware
const { auth } = require("../../middleware/auth");

// Question Data
const questions = require("../../bin/questions.json");

// Utils
function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

// @route   GET api/questions
// @desc    Get 5 random questions
// @access  Private
router.get("/", auth, (req, res) => {
  return res.json({ questions: getRandom(questions, 5), msg: "OK" });
});

module.exports = router;
