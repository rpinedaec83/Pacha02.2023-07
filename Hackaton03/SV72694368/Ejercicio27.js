function Ejercicio27() {
  let sum = 0, cont = 0;
  let i = 0;
  let n1=prompt("Ingresa un numero:")    
  let n = parseInt(n1);

  while (n >= 0) {
  let n1=prompt("Ingresa otro numero:")    
  let n = parseInt(n1);  
    sum += n;
    cont++;
  }

  if (cont > 0) {
    i = sum / cont;
    alert('La media es: '+ i);
  } else {
    alert('No se ha ingresado ningún número válido.');
  }

  alert('Usted ha ingresado un número negativo');
}

Ejercicio27();
