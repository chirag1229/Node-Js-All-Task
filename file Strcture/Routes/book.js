const express = require('express');
const { getApi } = require('../Controller/book');

const routes = express.Router()


routes.get('/',getApi)

module.exports={routes}