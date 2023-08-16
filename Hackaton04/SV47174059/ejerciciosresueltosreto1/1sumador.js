const http = require('http');
const url = require('url');

// Función para sumar dos números
function sumarNumeros(num1, num2) {
  return num1 + num2;
}

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const { num1, num2 } = JSON.parse(body);
      const resultado = sumarNumeros(num1, num2);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ resultado }));
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Endpoint no encontrado');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
