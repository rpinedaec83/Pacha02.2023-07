function sumaImpar(n) {
  let suma = 0;

  for (let i = 1; i <= n; i += 2) {
    suma += i;
  }

  return suma;
}

const n = prompt("Ingresar un número"); 
const resultado = sumaImpar(n);

document.querySelector('.tabla').innerHTML = `La suma de los números impares menores o iguales a ${n} es: ${resultado}`;
