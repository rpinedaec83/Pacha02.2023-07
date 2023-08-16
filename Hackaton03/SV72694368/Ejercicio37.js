function Ejercicio37() {
  let resto;
  let a=prompt("Ingresa numero 1:")    
  let n1 = parseFloat(a);
  let b=prompt("Ingresa numero 2:")    
  let n2 = parseFloat(b);

  while (n2 !== 0) {
    resto = n2;
    n2 = n1 % n2;
    n1 = resto;
  }

  alert("El MCD es: "+ n1);
}

Ejercicio37();
