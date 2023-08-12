let n1 = parseInt(prompt('Ingresar primer número'));
let n2 = parseInt(prompt('Ingresar segundo número'));

if (n1 > n2) {
    document.querySelector('.numero').innerHTML = `${n1} es mayor que ${n2}`;
}
else {
    document.querySelector('.numero').innerHTML = `${n2} es mayor que ${n1}`
}