// 35. Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.

function encontrarMayorMenor() {
    let numeroMayor = Number.NEGATIVE_INFINITY; // Inicializamos con un valor muy bajo
    let numeroMenor = Number.POSITIVE_INFINITY; // Inicializamos con un valor muy alto
  
    for (let i = 1; i <= 20; i++) {
      const numero = parseFloat(prompt(`Ingresa el número ${i}:`));
  
      if (isNaN(numero)) {
        alert("Error: Ingresa un número válido.");
        i--;
        continue;
      }
  
      if (numero > numeroMayor) {
        numeroMayor = numero;
      }
  
      if (numero < numeroMenor) {
        numeroMenor = numero;
      }
    }
  
    return { numeroMayor, numeroMenor };
  }
  
  const resultado = encontrarMayorMenor();
  alert("El número mayor es: ${resultado.numeroMayor}");
  alert("El número menor es: ${resultado.numeroMenor}");  