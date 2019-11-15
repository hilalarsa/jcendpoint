var express = require('express');
var router = express.Router();

var pool = require('../db/pool')

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log("Login")
  console.log(req.body.username)
  console.log(req.body.password)
  pool.query(`SELECT * FROM users where username='${req.body.username}' and password='${req.body.password}'`, (error, results) => {
    if (error) {
      console.log(error)
    }
    console.log(results)
    if(results.rowCount == 1){
      
        res.status(200).send({
            result: results.rows[0],
            status: true,
            code: 200,
            message: "Welcome to Konoha"
        })
    }else{
        res.status(200).send({
            result: "failed",
            status: false,
            code: 200,
            message: "Username & password combination incorrect"
        })
    }
  })
});

module.exports = router;
