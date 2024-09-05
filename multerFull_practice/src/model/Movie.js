const mongoose = require('mongoose');


const MovieSchema = new mongoose.Schema({

    movieName: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    releaseYear: {
        type: String,
        required: true
    },
    MovieImg:{
        type:String,
        required:true
    }

})

const Movie = mongoose.model("Movie", MovieSchema)


module.exports = { Movie }