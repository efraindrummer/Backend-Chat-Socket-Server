/*
path: localhost:8080/api/login
*/

const { Router } = require('express');

//controladores
const { crearUsuario, login, renewToken } = require('../controllers/auth');

const router = Router();

//definicion de los endpoints

//endpoint para crear a los nuevos usuarios
router.post('/new', crearUsuario);

//login
router.post('/', login);

//Revalidar token
router.get('/renew', renewToken);

module.exports = router;