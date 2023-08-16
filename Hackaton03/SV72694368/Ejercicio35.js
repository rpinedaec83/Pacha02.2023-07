function Ejercicio35() {
    let i, cont;
    let max, min;
    let a=prompt("Ingresa numero 1:")    
    let n1 = parseFloat(a);

  
    max = n1;
    min = n1;
    cont = 2;
  
    for (i = 1; i <= 19; i++) {
      console.log('Ingrese n'+ cont+ ' :');
      n1 = parseFloat(prompt());
  
      if (n1 > max) {
        max = n1;
      }
  
      if (n1 < min) {
        min = n1;
      }
  
      cont++;
    }
  
    console.log('El número menor es: ', min);
    console.log('El número mayor es: ', max);
  }
  
  Ejercicio35();
  