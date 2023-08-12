function tablaMulti(numero) {
    console.log(`Tabla de multiplicar de ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      const resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
  
  for (let numero = 1; numero <= 9; numero++) {
    tablaMulti(numero);
  }
  