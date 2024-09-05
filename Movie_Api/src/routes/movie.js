const express = require('express');
const { MovieData ,getMovieData} = require('../controller/movie')

const MovieRoutes = express.Router();

MovieRoutes.get('/',getMovieData)
MovieRoutes.post('/', MovieData)

module.exports = { MovieRoutes }