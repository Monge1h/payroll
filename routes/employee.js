var express = require('express');
var router = express.Router();

/* GET employee listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;