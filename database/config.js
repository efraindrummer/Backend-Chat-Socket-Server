const mongoose = require('mongoose')

const dbConnection = async() => {

    try {

        await mongoose.connect(process.env.DB_CNN_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('base de datos online');
        
    } catch (error) {
        console.log(error)
        throw new Error('Error al conectar a la base de datos - vea los Logs');
    }
}

module.exports = {
    dbConnection
}