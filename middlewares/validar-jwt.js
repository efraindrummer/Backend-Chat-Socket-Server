const jwt = require('jsonwebtoken');

const validarJWT = (req, res, next) => {

    try {
        const token = req.header('x-token');

        if(!token){
            return res.status(401).json({
                ok: false,
                msg: 'No hay token en la peticion'
            });
        }

        const { uid } = jwt.verify(token, process.env.JWT_KEY);
        req.uid = uid;
        
        next();

    } catch (e) {
        return res.status(401).json({
            ok: false,
            msg: 'Toekn no valido'
        })
    }
}

module.exports = {
    validarJWT
}