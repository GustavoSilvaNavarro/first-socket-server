//METHODS AND CLASSES FOR WEB SOCKETS - SOCKET.IO - CONNECTION
class Sockets {
    constructor(io) {
        this.io = io;

        this.socketEvents(); //executing the socket events
    };

    socketEvents() {
        //WEB SOCKETS - SOCKET.IO - ON CONNECTION
        this.io.on('connection', socket => {
            //RECEIVING SOCKET EVENT FROM CLIENT - MESSAGE FROM CLIENT
            socket.on('message-to-server', data => {
                console.log(data);
                //SENDING EVENT TO THE CLIENT - MESSAGES OF THE CHAT
                this.io.emit('message-from-server', data); // for everyone who connects to that connection of socket
            });
        });
    };
};

//EXPORTING SOCKET CLASS
module.exports = Sockets;