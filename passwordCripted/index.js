const express = require('express');
const mongoose = require('mongoose');
const { UserRoutes } = require('./src/router/user')

const app = express();
app.use(express.json())


app.use('/user', UserRoutes)



app.listen(8000, async () => {
  await mongoose.connect("mongodb://localhost:27017/password")
  console.log("server is running on port 8000")
})



