const http = require('http');

// Función para realizar operaciones matemáticas
function calculator(num1, operacion, num2) {
  switch (operacion) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '/':
      return num1 / num2;
    case 'x':
      return num1 * num2;
    case '%':
      return num1 % num2;
    default:
      return "El parámetro no es reconocido";
  }
}

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const { num1, operacion, num2 } = JSON.parse(body);
      const resultado = calculator(num1, operacion, num2);

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
