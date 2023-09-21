let http = require('http');
let dt = require('./myfirstmodule');
var fs = require('fs');
var moment = require('moment'); // require

http.createServer(function (req, res) {
 // res.writeHead(404, {'Content-Type': 'application/json'});
//   //res.write('Hello World!');
//   //res.write("The date and time are currently: " + dt.myDateTime());
//   let obj = {
//     "saludo":"Hola",
//     "fecha" : dt.myDateTime()
//   }
//   res.write(JSON.stringify(obj));
//   res.end();
fs.readFile('productos.json', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.write(moment().format())
    return res.end();
  });
}).listen(8080);