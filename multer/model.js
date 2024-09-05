const mongoose = require('mongoose');

const user = new mongoose.Schema({
    username: {
        Type: String
    },
    age: String,
    img: String
})


module.exports = mongoose.model('user', user)