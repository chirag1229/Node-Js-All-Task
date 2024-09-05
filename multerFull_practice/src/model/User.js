const mongoose = require('mongoose')

const UserShema = new mongoose.Schema({

    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    }

})

const User = mongoose.model("User", UserShema)

module.exports = { User }