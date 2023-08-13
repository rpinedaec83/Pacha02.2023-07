const http = require('http');
const url = require('url');

// Función para calcular la suma de los cubos de los números
function sumOfCubes(...numbers) {
  return numbers.reduce((sum, num) => sum + Math.pow(num, 3), 0);
}

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const numbers = JSON.parse(body);
      const resultado = sumOfCubes(...numbers);

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
