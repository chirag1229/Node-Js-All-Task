const express = require('express');
const mongoose = require('mongoose');
const User = require("./model")

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
    const data = await User.find()
    res.json({ data: data });
})

app.post('/', (req, res) => {  
    const req_body = req.body
    const userName = req_body["userName"]
    const age = req_body["age"]
    // data base create collection to use (.create)
    User.create({ userName: userName, age: age })
    res.json({ msg: "Data Sucessfull Send!" });
})

app.put('/:id', async(req, res) => {
    const id = req.params['id']
    const req_body = req.body
    const userName = req_body["userName"]
    const age = req_body["age"] 
    await User.findOneAndUpdate({ _id: id }, { userName,age })
    res.json({ msg: "Data Edit Sucessfull !" })
})

app.delete('/:id',async (req, res) => {
    const id = req.params['id']
    await User.deleteOne({ _id: id })
    res.json({ msg: "Data Delete Sucessfull" })
})

app.listen(8000, async() => {
    // mongodb connection to use (mongoose.connect);
   await mongoose.connect("mongodb://localhost:27017/NodeJs")
    console.log("db connected");
    console.log("Server is running on port 8000");
})

