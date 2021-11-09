//CALL MODULES AND METHODS
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');

//METHODS AND CLASSES FOR THE SERVER
class Server {
    constructor() {
        this.app = express(); //express server
        this.port = process.env.PORT || 4000;

        this.server = http.createServer(this.app); //socket server
        this.io = socketIo(this.server); //socket server settings
    }

    middlewares() {
        //STATIC FILES - USE PUBLIC DIRECTORY
        this.app.use(express.static(path.resolve(__dirname, '../public')));
    }

    socketSettings() {
        new Sockets(this.io);
    }

    execute() {
        //INITIALIZE MIDDLEWARES
        this.middlewares();

        //INITIALIZE SOCKETS
        this.socketSettings();

        //SERVER
        this.server.listen(this.port, () => {
            console.log('Server on Port...', this.port);
        });
    }
};

//EXPORTING CLASS
module.exports = Server;