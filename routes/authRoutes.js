//importaciones
const express = require('express');
const router =express.Router();
const authController =require('./../controllers/authController');

//router
//signup - obtener pagina
router.get('/register', authController.register)

//login enviar formulario
router.post('/register', authController.registerForm)

//login - obtener pagina
router.get('/login', authController.login)



//exportacion
module.exports = router