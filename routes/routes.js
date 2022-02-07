//importaciones
const express = require('express');
const router = express.Router();

const indexController = require('./../controllers/indexController')
//router
router.get('/', indexController.getHome)
//profile route
router.get('/profile', indexController.getProfile)

//exportacion
module.exports = router