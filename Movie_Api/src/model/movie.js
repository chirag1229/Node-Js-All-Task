const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    moviename: {
        type: String,
        required: true
    },
    director: {
        type: String,
        require: true
    },
    actor: {
        type: String,
        require: true
    },
    year: {
        type: String,
    }
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = { Movie }