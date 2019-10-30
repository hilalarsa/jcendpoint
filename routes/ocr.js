var express = require('express');
var fs = require('fs');
var router = express.Router();
var { createWorker } = require('tesseract.js');


var pool = require('../db/pool')

// console.log(con)

/* GET users listing. */
router.get('/', function(req, res, next) {
//   pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
//     if (error) {
//       console.log(error)
//     }
//     console.log(results)
//     res.status(200).json(results.rows)
//   })



    const worker = createWorker({
    logger: m => console.log(m)
    });

    (async () => {
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
        console.log(text);
        await worker.terminate();
      })();
});

module.exports = router;
