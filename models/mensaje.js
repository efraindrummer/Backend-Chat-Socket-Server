const { Schema, model } = require('mongoose');

const MensajeSchema = Schema({

    //el DE es la persona que envia el mensaje
    de: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        require: true
    },
    //el PARA es para quien es el mensaje
    para: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        require: true
    },
    mensaje: {
        type: String,
        require: true
    }

}, {
    //con esta funcion se le asiganara la fecha de creacion y ultima modificacion
    timestamos: true
});

//serializacion para extraer la desestructuracion de las variables del objeto
MensajeSchema.method('toJSON', function(){
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('Mensaje', MensajeSchema);