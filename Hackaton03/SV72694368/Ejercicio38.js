function Ejercicio38() {
  let cont, cant, sum, rest;
  let a=prompt("Ingresa numero 1:")    
  let n1 = parseInt(a);

  cont = 0;
  cant = 0;

  while (n1 !== cont) {
    cont = cont + 1;
    if (cont !== n1) {
      rest = n1 % cont;
      if (rest === 0) {
        cant = cant + cont;
      }
    } else {
      cont = n1;
    }
  }

  alert('Sum de los divisores: '+ cant);

  if (n1 === cant) {
    alert('El número ingresado es perfecto');
  } else {
    alert('El número ingresado no es perfecto');
  }
}

Ejercicio38();
