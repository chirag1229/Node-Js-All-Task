const express = require('express');
const mongoose = require('mongoose');
const { MovieRoutes } = require('./src/routes/movie')

const app = express();
app.use(express.json())

app.use('/movies', MovieRoutes)


app.listen(8000, async () => {
    mongoose.connect('mongodb://localhost:27017/Movie_Api')
    console.log("db connected");
    console.log("server runing port 8000");

})

