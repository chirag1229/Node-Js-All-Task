const express = require('express')
const {getmovie,createmovie} = require('../controllers/movie')

const movie_routes = express.Router()

movie_routes.get('/',getmovie)
movie_routes.post('/',createmovie)
// movie_routes.delete('/:id',deletemovie)
// movie_routes.put('/:id',updatemovie);

module.exports = { movie_routes }