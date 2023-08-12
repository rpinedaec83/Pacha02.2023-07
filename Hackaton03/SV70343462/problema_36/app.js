//Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci

function calculaFibonacci(n) {
  const fibonacci = [0, 1];
  
  for (let i = 2; i <= n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  
  return fibonacci;
}

const n = parseInt(prompt('Ingresar número:'));
const serieFibonacci = calculaFibonacci(n);

document.querySelector('.numero').innerHTML = `Serie de Fibonacci hasta ${n}: ${serieFibonacci}`;
