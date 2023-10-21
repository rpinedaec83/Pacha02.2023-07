const express = require("express");
const app = express();

const http = require("http");

const server  = http.createServer(app);
const {Server} =  require("socket.io");
const io = new Server(server);
const https = require('https');


const options = {
	method: 'GET',
	hostname: 'the-weather-api.p.rapidapi.com',
	port: null,
	path: '/api/weather/lima',
	headers: {
		'X-RapidAPI-Key': '73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186',
		'X-RapidAPI-Host': 'the-weather-api.p.rapidapi.com'
	}
};






io.on("connection",(socket)=>{
    console.log("Alguien se conecto");
    socket.on("chat",(msg)=>{
        if(msg == "clima"){
            const req = https.request(options, function (res) {
                const chunks = [];
            
                res.on('data', function (chunk) {
                    chunks.push(chunk);
                });
            
                res.on('end', function () {
                    const body = Buffer.concat(chunks);
                    io.emit("chat",body.toString());
                });
            });
            req.end();
        }
        io.emit("chat",msg);
    });

})

app.get("/", (req, res)=>{
    res.sendFile(`${__dirname}/client/index.html`)
});

server.listen(3000, ()=>{
    console.log("Servidor listo en el puerto 3000");
});