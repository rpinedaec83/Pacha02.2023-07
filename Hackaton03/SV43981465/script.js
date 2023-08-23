// 37. Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.

function mcdEuclides(a, b) {
    // Algoritmo de Euclides
    while (b !== 0) {
      const resto = a % b;
      a = b;
      b = resto;
    }
  
    return a;
  }
  
  let numero1 = parseInt(prompt("Ingrese primer número:"));
  let numero2 = parseInt(prompt("Ingrese segundo número"));
  const mcd = mcdEuclides(numero1, numero2);
  alert("El M.C.D de ${numero1} y ${numero2} es: ${mcd}");
  