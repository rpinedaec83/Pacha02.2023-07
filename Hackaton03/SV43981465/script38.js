// 38. Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.

function esNumeroPerfecto(numero) {
    if (numero <= 0) {
      return false; // Los números negativos y cero no pueden ser perfectos
    }
  
    let sumaDivisores = 0;
  
    for (let i = 1; i <= numero / 2; i++) {
      if (numero % i === 0) {
        sumaDivisores += i;
      }
    }
  
    return sumaDivisores === numero;
  }
  
  let numero = parseInt(prompt("Ingresar un número:"));
  const resultado = esNumeroPerfecto(numero);
  
  if (resultado) {
    alert("${numero} es un número perfecto.");
  } else {
    alert("${numero} NO es un número perfecto.");
  }
  