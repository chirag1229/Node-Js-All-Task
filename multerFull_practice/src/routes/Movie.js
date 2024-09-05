const express = require('express');
const { CreateMovie, getMovie, deleteMovie } = require('../controller/Movie');
const { multerConfing } = require('../Confing/Multer_Confing')

const movie_Router = express.Router()

// Api Breack Point
movie_Router.get('/', getMovie)
movie_Router.post('/create', multerConfing.single('img'), CreateMovie)
movie_Router.delete('/delete/:id', deleteMovie)


module.exports = { movie_Router }