const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const port = process.env.PORT || 3000;

// Servir archivos estáticos desde el directorio 'client'
app.use(express.static(path.join(__dirname, 'client')));

// Ruta para la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

// Manejo de conexiones de Socket.IO
io.on('connection', (socket) => {
    console.log('Un usuario se ha conectado');

    socket.on('chat message', (msg) => {
        // Emitir el mensaje a todos los clientes excepto al remitente
        socket.broadcast.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('Un usuario se ha desconectado');
    });
});

server.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
