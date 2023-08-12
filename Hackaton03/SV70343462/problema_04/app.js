
//Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.

let a, b, c;

let num1 = prompt("Ingresar primer número");
let num2 = prompt("Ingresar segundo número");
let num3 = prompt("Ingresar tercer número");

let n1 = parseInt(num1);
let n2 = parseInt(num2);
let n3 = parseInt(num3);


if (n1 <= n2 && n1 <= n3) {
    a = n1;
    if (n2 >= n3) {
        b = n3;
        c = n2;
    }
    else {
        b = n2;
        c = n3;
    }
}
else if (n2 <= n1 && n2 <= n3) {
    a = n2;
    if (n3 >= n1) {
        b = n1;
        c = n3;
    }
    else {
        b = n3;
        c = n1;
    }
}
else {
    if (n3 <= n1 && n3 <= n2) {
        a = n3;
        if (n1 >= n2) {
            b = n2;
            c = n1;
        }
        else {
            b = n1;
            c = n2;
        }
    }
}

document.querySelector('.resultadoa').innerHTML = `${a}`;
document.querySelector('.resultadob').innerHTML = `${b}`;
document.querySelector('.resultadoc').innerHTML = `${c}`;
