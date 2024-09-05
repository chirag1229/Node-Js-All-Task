const express = require('express');
const { registration } = require('../controller/User')



const userRoutes = express.Router()

userRoutes.post('/register', registration)
// userRoutes.post('/login', userLogin)


module.exports = { userRoutes }