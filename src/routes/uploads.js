const express = require('express')
const Route = express.Router()

const uploadController = require('../controllers/uploads')

Route
  .post('/upload', uploadController.upload)

module.exports = Route
