/* 35. Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números. */

let numbers = [], random_num = 0, mayor = 0, menor = 101;

for (let i = 0; i < 20; i++) {
    random_num = Math.floor(Math.random() * 100 ) + 1;
    numbers.push(random_num);
}

for (let i = 0; i < numbers.length; i++){
    let ele = numbers[i];

    if (ele > mayor){
        mayor = ele;
    }
    if (ele < menor){
        menor = ele;
    }

}
console.log(numbers)

console.log(`El número mayor es el ${mayor} y el menor es el ${menor}`)