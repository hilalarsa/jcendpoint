var express = require('express');
var router = express.Router();

var pool = require('../db/pool')

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

router.post('/', function(req, res, next) {

  let {
    id,
    id_role, 
    username,
    password,
    email,
    fullname,
    phone, 
    gender, 
    avatar, 
    status, 
    title, 
    exp,
    level,
    money,
    is_verified,
    join_date,
    created_date, 
    profile_image
  } = req.body

  pool.query(`INSERT INTO users VALUES (
    '${id}',
    '${id_role}', 
    '${username}',
    '${password}',
    '${email}',
    '${fullname}',
    '${phone}', 
    '${gender}', 
    '${avatar}', 
    '${status}', 
    '${title}', 
    '${exp}',
    '${level}',
    '${money}',
    '${is_verified}',
    '${join_date}',
    '${created_date}', 
    '${profile_image}'
  )`, (error, results) => {
    if (error) {
      console.log(error)
    }
    console.log(results)
    res.status(200).json(results)
  })
});

module.exports = router;
