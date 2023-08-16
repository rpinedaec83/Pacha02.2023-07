// 36. Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.

function fibonacci(numeroTerminos) {
    const serieFibonacci = [0, 1]; // Inicializamos la serie con los primeros dos números (0 y 1)
  
    for (let i = 2; i < numeroTerminos; i++) {
      const numeroAnterior1 = serieFibonacci[i - 1];
      const numeroAnterior2 = serieFibonacci[i - 2];
      const nuevoNumero = numeroAnterior1 + numeroAnterior2;
  
      serieFibonacci.push(nuevoNumero);
    }
  
    return serieFibonacci;
  }
  
  let numeroTerminos = parseInt(prompt("Ingrese un número:"));
  const resultadoSerie = fibonacci(numeroTerminos);
  alert("Serie de Fibonacci (${numeroTerminos} términos): ${resultadoSerie.join(", ")}");
  