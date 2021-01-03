const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({

    nombre: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        uniquie: true
    },
    password: {
        type: String,
        require: true
    },
    online: {
        //esta propieda lo que hara es mostar si el usuario esta online
        //despues se mostrara en una lista y se mandara al final al que este conectado o no
        type: Boolean,
        default: false
    }

});

//serializacion para extraer la desestructuracion de las variables del objeto
UsuarioSchema.method('toJSON', function(){
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

module.exports = model('Usuario', UsuarioSchema);