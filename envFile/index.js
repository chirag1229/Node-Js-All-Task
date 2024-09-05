const mongoose = require('mongoose');
const express = require('express');
const {user_api}=require("./src/routes/user")

const app = express();
app.use(express.json());

app.use('/',user_api)


app.listen(8000, () => {
    mongoose.connect('mongodb://localhost:27017/practice_useData')
    console.log('server is running on port 8000');
})