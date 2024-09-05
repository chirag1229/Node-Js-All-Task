const { json } = require('express');
const jwt = require('jsonwebtoken');

//this function use to jwt pass the token
const authToken = (req, res, next) => {
    try {
        const token = req.header('Authorization').split(" ")[1]
        let verification = null;

        verification = jwt.verify(token, 'dhruv@5129')

        console.log(verification);


        req.token = token


    } catch (error) {
        res, json({ msg: "token is not Valid" })
    }
    next()
}

module.exports = { authToken }