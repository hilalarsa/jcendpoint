var express = require('express');
var app = express();

var router = express.Router();

const multer = require('multer');
const upload = multer({dest: __dirname + '/uploads'});
const fs = require("fs")
const path = require("path")
var { createWorker } = require('tesseract.js');
var pool = require('../db/pool')

router.get('/', (req, res) => {
    console.log("GET upload")
});

router.post('/', upload.single('photo'), (req, res) => {
    console.log("POST upload")
    console.log(__dirname)
    if(req.file) {
        const tempPath = req.file.path;
        const targetPath = path.join(__dirname, "./uploads/"+req.file.originalname);
        console.log(targetPath)
        
        fs.rename(tempPath, targetPath, err => {
            if (err) console.log(err)

            // pool.query(`UPDATE users SET profile_image='${req.file.originalname}' WHERE id='${1}'`, (error, results) => {
            //     if (error) {
            //         console.log(error)
            //     }
            // })

            // const worker = createWorker({
            //     logger: m => console.log(m)
            //     });
            
            //     (async () => {
            //         await worker.load();
            //         await worker.loadLanguage('eng');
            //         await worker.initialize('eng');
            //         const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
            //         console.log(text);
            //         await worker.terminate();
            //     })();

            res.status(200).send(text)
        })
    }else{
        res.status(400).send("ERROR SOMETHING NOT WORKING")
    }
});

module.exports = router;