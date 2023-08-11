function sumaPar(n) {
    let suma = 0;
  
    for (let i = 0; i <= n; i += 2) {
      suma += i;
    }
  
    return suma;
  }
  
  const n = 1000; 
  const resultado = sumaPar(n);
  
  document.querySelector('.tabla').innerHTML = `La suma de todos los  números pares hasta ${n} es: ${resultado}`;
  