var express = require('express');
var router = express.Router();

// replace with db data
var users = [{id: 1, name: 'Joseph'}, {id: 2, name: 'Antoinette'}, {id: 3, name: 'Joel'}, {id: 4, name: 'Kristy'}
  , {id: 5, name: 'Scott'}, {id: 6, name: 'Ryan'}, {id: 7, name: 'Kris'}];

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json(users);
});

/* GET single user */
router.get('/:id', function (req, res, next) {

  // this is how you get data from a url, example: http://localhost:3000/users/2
  var id = req.params.id;

  res.json(users[id]);
});

module.exports = router;
