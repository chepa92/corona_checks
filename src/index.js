const express = require('express')
const Route = express.Router()

const uploads = require('./routes/uploads')

Route

  .use('/', uploads)

module.exports = Route
