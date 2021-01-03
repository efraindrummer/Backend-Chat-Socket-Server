const { response } = require("express");
const { validationResult } = require("express-validator");

//controlador para crear el usuario
const crearUsuario = async(req, res = response) => {
    res.json({
        ok: true,
        msg: 'new'
    })
}

//controlador del login
const login = async(req, res) => {

    const errores = validationResult(req);

    if(!errores.isEmpty()){
        return res.status(400).json({
            ok: false,
            errors: errores.mapped()
        });
    }

    const { email, password } = req.body; //desestructuracion del email y password en el mismo body

    //esto solo se va a ejecutar si no tengo un error
    res.json({
        ok: true,
        msg: 'login',
        email,
        password
    })
}

//controlador para renovar el token
const renewToken = async(req, res) => {
    res.json({
        ok: true,
        msg: 'renew'
    })
}

module.exports = {
    crearUsuario,
    login,
    renewToken
}