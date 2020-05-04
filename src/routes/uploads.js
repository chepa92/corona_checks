const express = require('express')
const Route = express.Router()

const uploadController = require('../controllers/uploads')

Route
  .post('/cloudinary', uploadController.uploadCloudinary)

module.exports = Route
