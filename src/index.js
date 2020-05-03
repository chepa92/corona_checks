const express = require('express')
const Route = express.Router()

const uploads = require('./routes/uploads')

Route

  .use('/uploads', uploads)

module.exports = Route
