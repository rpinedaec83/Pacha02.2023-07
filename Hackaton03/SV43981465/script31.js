// 31. Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.

function calcularMediaParesEImpares() {
    let sumaPares = 0;
    let cantidadPares = 0;
    let sumaImpares = 0;
    let cantidadImpares = 0;
  
    for (let i = 1; i <= 10; i++) {
      const numero = parseInt(prompt(`Ingresa el número ${i}:`));
  
      if (isNaN(numero)) {
        alert("Error: Ingresa un número válido.");
        i--;
        continue;
      }
  
      if (numero % 2 === 0) {
        sumaPares += numero;
        cantidadPares++;
      } else {
        sumaImpares += numero;
        cantidadImpares++;
      }
    }
  
    const mediaPares = cantidadPares === 0 ? 0 : sumaPares / cantidadPares;
    const mediaImpares = cantidadImpares === 0 ? 0 : sumaImpares / cantidadImpares;
  
    return { mediaPares, mediaImpares };
  }
  
  const resultadoMedias = calcularMediaParesEImpares();
  alert("Media de los números pares: ${resultadoMedias.mediaPares}");
  alert("Media de los números impares: ${resultadoMedias.mediaImpares}");
  