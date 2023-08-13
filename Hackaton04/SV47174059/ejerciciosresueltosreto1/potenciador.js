const http = require('http');
const url = require('url');

// Función para calcular la potencia de un número
function calcularPotencia(base, exponente) {
  return Math.pow(base, exponente);
}

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const { base, exponente } = JSON.parse(body);
      const resultado = calcularPotencia(base, exponente);

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
