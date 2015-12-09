var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  // replace with mongo data from users collection
  var users = [{name: 'Joseph'}, {name: 'Antoinette'}];
  res.json(users);
});

module.exports = router;
