// 34. Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno nueve.

function tablaDeMultiplicar() {
    for (let numero = 1; numero <= 9; numero++) {
      alert("Tabla de multiplicar del ${numero}:");
      for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
        const resultado = numero * multiplicador;
        alert("${numero} x ${multiplicador} = ${resultado}");
      }
      console.log("\n");
    }
  }
  
  tablaDeMultiplicar();  