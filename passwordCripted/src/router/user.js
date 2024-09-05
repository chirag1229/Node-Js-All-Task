const express = require('express')
const { CreateUser, getUser } = require('../controller/user')

const UserRoutes = express.Router()


// UserRoutes.get('/', getUser)
UserRoutes.post('/register', CreateUser)

module.exports = { UserRoutes }