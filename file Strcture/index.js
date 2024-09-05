const express = require('express');
const {routes}=require('./Routes/book')

const app=express()

app.use('/book',routes)

app.listen(8000)


