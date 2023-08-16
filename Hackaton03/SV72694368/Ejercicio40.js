function Ejercicio40() {
  let i, conta;
  let p_i = 0;
  conta = 0;

  let a=prompt("Ingresa numero para calcular la sucesion de pi:")    
  let n1 = parseInt(a);

  for (i = 2; i <= n1; i += 2) {
    if (conta % 2 === 0) {
      p_i = p_i + (4 / (i * (i + 1) * (i + 2)));
    } else {
      p_i = p_i - (4 / (i * (i + 1) * (i + 2)));
    }
    conta++;
  }

  alert("Pi se aproxima a: "+ (p_i + 3));
}

Ejercicio40();
