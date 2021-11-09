//CALL MOODULES AND METHODS
require('dotenv').config(); //ENVIROMENT VARIBLES CONFIRMATION
const Server = require('./models/server');

//CREATING SERVER
const server = new Server();

//EXECUTING SERVER
server.execute();