const express = require('express');
const mongoose = require('mongoose');
const { movie_Router } = require('./src/routes/Movie');
const { userRoutes } = require('./src/routes/User');

const app = express();

app.use(express.json())

app.use('/user', userRoutes)
app.use('/movie', movie_Router)

app.listen(3000, () => {
    mongoose.connect('mongodb://localhost:27017/Multer_practice')
    console.log("server is running on port 3000");
})

