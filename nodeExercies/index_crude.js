const express = require('express')
const app = express()

const arr = [];

app.use(express.json())
app.get('/add', (req, res) => {
    let body = req.body
    arr.push(body["data"])

    res.send({ "msg": "data added Sucessfully" })
})

app.get('/get_element/:id', (req, res) => {
    console.log(req.query);
    const index = Number(req.params["id"])
    if (arr[index] === undefined) {
        res.json({ "arr_data": `at index:${index} Value does not exist` })
    } else {
        res.json({
            "arr_data": arr[index]
        })
    }
})

app.get('/get_all_data', (req, res) => {
    res.json({ "my_arr": arr })
})

app.listen(8000)