/*
path: localhost:8080/api/login
*/

const { Router } = require('express');
const { check } = require('express-validator');

//controladores
const { crearUsuario, login, renewToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

//definicion de los endpoints

//endpoint para crear a los nuevos usuarios
router.post('/new', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    validarCampos
], crearUsuario);

//login
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validarCampos
], login);

//Revalidar token
router.get('/renew', validarJWT, renewToken);

module.exports = router;