const mongoose = require('mongoose')

const movie_schema = new mongoose.Schema({
    moviename:{
        type:String,
        require:true,
    },

    castname:{
        type:String,
        require:true,
    },

    year:{
        type:String,
        require:true,
    },

    rating:{
        type:String,
        require:true,
    },

})
const movie = mongoose.model('movie',movie_schema)
module.exports = {movie}