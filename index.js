const server = require('./config/server')
const express = require('express')
const router = express.Router()

const todolistController = require('./controller/activityController')

todolistController(router)

server.use('/', router);