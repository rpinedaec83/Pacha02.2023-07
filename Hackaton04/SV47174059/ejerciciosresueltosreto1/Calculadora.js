const http = require('http');
const url = require('url');

// Función para calcular el área de un triángulo
function triArea(base, altura) {
  return (base * altura) / 2;
}

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const { base, altura } = JSON.parse(body);
      const area = triArea(base, altura);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ area }));
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
