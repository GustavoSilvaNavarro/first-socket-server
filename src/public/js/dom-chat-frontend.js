//START CONNECTION USING OBJECT IO
const socket = io('https://socket-server-backend.herokuapp.com/'); //se va a conectar al dominio en este caso al localhost y le debo dar la ruta donde se va a dar la coneccion en tiempo real / Genero mismo id en el servidor y en el frontend asi saben que es el mismo

//REFERENCING DOM ELEMENTS - HTML
const form = document.querySelector('#myForm');
const userMessage = document.getElementById('txtMessage');
const messages = document.getElementById('myMessages');

//EVENT TO SEND DATA TO THE SERVER - CHAT MESSAGES
form.addEventListener('submit', e => {
    e.preventDefault(); //to avoid the refresh

    const newMessage = userMessage.value;

    //SOCKET SENDING EVENT TO THE SERVER - MESSAGE FROM USER CLIENT
    socket.emit('message-to-server', { textmsg: newMessage });
});

//SOCKET RECEIVING EVEMT FROM SERVER - MESSAGE FROM SERVER
socket.on('message-from-server', message => {
    messages.innerHTML += `<li>${message.textmsg}</li>`;
});
