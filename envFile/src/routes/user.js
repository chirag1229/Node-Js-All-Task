const express = require('express');
const { createUser } = require('../controller/user');
const { model } = require('mongoose');

const user_api = express.Router()

user_api.post('/', createUser);

model.exports = { user_api }