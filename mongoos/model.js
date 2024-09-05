const mongoose = require("mongoose")

const User = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    age: String
})

module.exports = mongoose.model('User', User)