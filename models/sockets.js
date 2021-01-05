const { comprobarJWT } = require("../helpers/jwt");


class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {
            
            const [ valido, uid ] = comprobarJWT(socket.handshake.query['x-token']);

            if(!valido){
                console.log('Socket no identificado');
                return socket.disconnect();
            }
            console.log('cliente conectado: ', uid);
            //validar el jwt en el instancte y si es valido continua
            //si el token no es valido se tendra que desconectar
            //todo el usuario tiene que saber que esta activo y se tiene ue hacer hace mediante el uid
            //emitir todos los usarios conectados
            //socket join - para unirse a una sala especifica con el mismo uid
            //escuchar cuando el cliente manda un mensaje - Mensaje personal
            //disconnect para marcar en la base de datos que es usuario se desconecto
            //emitir todos los usaurios conectados jejejeje, disfrutar trabajando JAJAJAJ  (:
            socket.on('disconnect', () => {
                console.log('cliente desconectado', uid);
            })
        });
    }


}


module.exports = Sockets;