const { response } = require("express");

//controlador para crear el usuario
const crearUsuario = async(req, res = response) => {
    res.json({
        ok: true,
        msg: 'new'
    })
}

//controlador del login
const login = async(req, res) => {
    res.json({
        ok: true,
        msg: 'login'
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