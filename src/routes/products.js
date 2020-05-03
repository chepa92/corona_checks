const express = require('express')
const Route = express.Router()

const productsController = require('../controllers/products')

Route
  .post('/', productsController.addProduct)

module.exports = Route
