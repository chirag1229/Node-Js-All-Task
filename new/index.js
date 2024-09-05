const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

let arr = [{
    id: 1,
    user: "one"
},{
    id: 2,
    user: "two"
},{
    id: 3,
    user: "three"
},{
    id: 4,
    user: "four"
}]

app.get('/', function(req, res){
    res.json({
        data: arr
    })
})

app.listen(3000)