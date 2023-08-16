function Ejercicio39() {
  let i, cont;
  let p_i = 0;
  cont = 0;

  let a=prompt("Ingresa numero para calcular la sucesion de pi:")    
  let n1 = parseInt(a);

  for (i = 1; i <= n1; i += 2) {
    if (cont % 2 === 0) {
      p_i = p_i + (4 / i);
    } else {
      p_i = p_i - (4 / i);
    }
    cont++;
  }

  alert("Pi se aproxima a: "+ p_i);
}

Ejercicio39();
