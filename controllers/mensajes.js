const Mensaje = require('../models/mensaje');

const obtenerChat = async(req, res) => {
    const midId = req.uid;
    const mensajesDe = req.params.de;

    const last30 = await Mensaje.find({
        $or: [
            {de: midId, para: mensajesDe},
            {de: mensajesDe, para: midId},
        ]
    })
    .sort({ createdAt: 'asc'})
    .limit(30);

    res.json({
        ok: true,
        mensajesDe: last30
    });
}

module.exports = {
    obtenerChat
}