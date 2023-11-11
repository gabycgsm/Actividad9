const http = require('http');

//recupera la app de express
const app = require('./src/app');
//const { error } = require('console');

//leemos el fichero de entorno
require('dotenv').config();

//configuración base de datos
require('./src/config/db');

//creación del servidor
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT);

server.on('listening',() => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});

server.on('error', (error) => console.log(error));