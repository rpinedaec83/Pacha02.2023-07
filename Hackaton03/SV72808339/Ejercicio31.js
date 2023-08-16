/* 31. Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números. */

let numbers = [],random_num = 0;
let suma_par = 0, suma_impar = 0;
let pares = 0, impares = 0;

for (let i = 0; i < 10; i++){
    random_num = Math.floor(Math.random() * 100 ) + 1;
    numbers.push(random_num);
}

console.log(numbers)

for (const i in numbers) {
    if (Object.hasOwnProperty.call(numbers, i)) {
        if (numbers[i] % 2 === 0){
            suma_par += numbers[i];
            pares++;
        } else{
            suma_impar += numbers[i]
            impares++;
        }
    }
}

console.log(`La media de los ${pares} numeros pares es: ${suma_par/pares}`)

console.log(`La media de los ${impares} numeros pares es: ${suma_impar/impares}`)