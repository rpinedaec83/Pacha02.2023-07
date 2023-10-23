// Archivo de arranque de la app
import app from './app';
import {Server as WebsocketServer} from 'socket.io';
import http from 'http';
import sockets from './sockets';

import {connectDB} from './db';

connectDB();

const server = http.createServer(app);
const httpserver = server.listen(3000);
console.log("Server is running on port 3000");

const io = new WebsocketServer(httpserver);
sockets(io);