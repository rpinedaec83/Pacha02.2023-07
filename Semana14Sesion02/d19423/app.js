const express = require("express");
const app = express();

const http = require("http");

const server  = http.createServer(app);
const {Server} =  require("socket.io");
const io = new Server(server);

io.on("connection",(socket)=>{
    console.log("Alguien se conecto");
    socket.on("chat",(msg)=>{
        io.emit("chat",msg);
    });

})

app.get("/", (req, res)=>{
    res.sendFile(`${__dirname}/client/index.html`)
});

server.listen(3000, ()=>{
    console.log("Servidor listo en el puerto 3000");
});