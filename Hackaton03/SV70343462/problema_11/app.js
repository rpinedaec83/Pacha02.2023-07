let n1 = parseInt(prompt('Ingresar primer número'));
let n2 = parseInt(prompt('Ingresar segundo número'));
let n3 = parseInt(prompt('Ingresar tercer número'));

if (n1 > n2 && n1 > n3) {
    document.querySelector('.numero').innerHTML = `${n1} es mayor que ${n2} y mayor que ${n3}`;
}
else if(n2 > n1 && n2 > n3){
    document.querySelector('.numero').innerHTML = `${n2} es mayor que ${n1} y mayor que ${n3}`;
}
else {
    document.querySelector('.numero').innerHTML = `${n3} es mayor que ${n1} y mayor que ${n2}`;
}