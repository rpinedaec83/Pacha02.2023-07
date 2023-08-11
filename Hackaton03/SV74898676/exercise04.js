const leerEntero = (txt) => {
    let integer = prompt(txt);
    integer = parseInt(integer);

    return integer;
}

let num1 = leerEntero('Ingresar 1er numero: ');
let num2 = leerEntero('Ingresar 2do numero: ');
let num3 = leerEntero('Ingresar 3er numero: ');

const sortNumbers = (n1, n2, n3) => {
    let numbers = [];

    if (n1 > n2 && n1 > n3) {
        numbers.push(n1);

        if (n2 > n3) {
            numbers.push(n2);
            numbers.push(n3);
        }
        else {
            numbers.push(n3);
            numbers.push(n2);
        }
    }

    if (n2 > n1 && n2 > n3) {
        numbers.push(n2);

        if (n1 > n3) {
            numbers.push(n1);
            numbers.push(n3);
        }
        else {
            numbers.push(n3);
            numbers.push(n1);
        }
    }

    if (n3 > n1 && n3 > n2) {
        numbers.push(n3);

        if (n1 > n2) {
            numbers.push(n1);
            numbers.push(n2);
        }
        else {
            numbers.push(n2);
            numbers.push(n1);
        }
    }

    return numbers;
}

let orderedNumbers = sortNumbers(num1, num2, num3).reverse();

orderedNumbers.forEach((item) => {
    alert(item);
});