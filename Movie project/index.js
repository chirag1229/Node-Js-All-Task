const express = require('express')
const mongoose = require('mongoose')
const {movie_routes} = require('./src/routes/movie')

// const cors = require("cors")
const app = express()


app.use(express.json())
// app.use(cors())
app.use('/', movie_routes)
// app.get('/',(req,res)=>{
//     res.json({
//         msg:'hello word'
//     })
// })


app.listen(8000, () => {
    mongoose.connect('mongodb://localhost:27017/MOVIE')
    console.log("server started at http://localhost:8000/")
})
 