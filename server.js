const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname));

io.on('connection', (socket) => {
  console.log('Un usuario se conectó');

  socket.on('mensaje', (msg) => {
    io.emit('mensaje', msg);
  });
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
