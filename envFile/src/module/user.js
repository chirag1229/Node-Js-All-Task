const mongoose = require('mongoose');


const user_schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 4
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('User',user_schema)