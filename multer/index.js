const express = require('express');
const mongoose = require('mongoose');
const user = require('./model');
const fs = require('fs');
const path = require('path');

const User = require('./model');
const multer = require('multer');

const app = express();
app.use(express.json()) //to get data in body
app.use('/img', express.static("uploads")) //to give access to static files


//multer use in file and images upload your pc to server sider
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.round() * 100000)
        cb(null, uniqueSuffix + '-' + file.fieldname)
    }
})
const upload = multer({ storage: storage })

app.get('/', async (req, res) => {
    // to get all data
    const data = await User.find();
    res.json({ data: data });
})

app.post('/', upload.single("img"), (req, res) => {
    //to Create data
    const req_body = req.body
    const username = req_body['username']
    const age = req_body['age']
    let img_link = ''

    if (req.file) {
        img_link =''
    }

})



app.listen(8000, async () => {
    await mongoose.connect("mongodb://localhost:27017/learn_Multer")
    console.log("server is running on port 8000")
})  