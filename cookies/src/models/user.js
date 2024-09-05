const mongoose = require('mongoose')

const user_schema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },

    password:String
},

    {
        timestamps:true,
        versionkey:false,
    })

    const User = mongoose.model('user',user_schema)
    module.exports = {User}