function sumaNumero(n) {
  return (n * (n + 1)) / 2;
}

const n = parseInt(prompt('Ingresar máximo de número para la suma:'));
const suma = sumaNumero(n);

document.querySelector('.suma').innerHTML = `La suma de los primeros ${n} números naturales es: ${suma}`;
