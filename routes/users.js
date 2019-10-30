var express = require('express');
var router = express.Router();

var pool = require('../db/pool')

// console.log(con)

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("GET USERS")
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      console.log(error)
    }
    console.log(results)
    res.status(200).json(results.rows)
  })
});

module.exports = router;
