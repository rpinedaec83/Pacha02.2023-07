function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  
  const numero = 5; 
  const resultado = calcularFactorial(numero);
  
document.querySelector('.factorial').innerHTML = `El factorial de ${numero} es: ${resultado}`;
  