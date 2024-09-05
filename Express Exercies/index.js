const express = require('express');
const app = express();

// middleware use to next function
app.get("/", function (req, res,next) {
    res.send("Hello World");
    next();
})


app.listen(3000);