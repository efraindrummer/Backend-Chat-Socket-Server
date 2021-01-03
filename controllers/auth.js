const { response } = require("express");
const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt');

//controlador para crear el usuario
const crearUsuario = async(req, res = response) => {
    
    try {
        const { email, password } = req.body;
        
        //verificar si el email existe
        const existeEmail = await Usuario.findOne({ email });
        if(existeEmail){
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya existe'
            })
        }

        const usuario = new Usuario(req.body);
        //encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);
        //guardar usuario en base de ddatos
        await usuario.save();
        //generar un JWT
        const token = await generarJWT(usuario.id);

        res.json({
            usuario,
            token
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

//controlador del login
const login = async(req, res) => {

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