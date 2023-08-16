/* 29. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.*/

let suma = 0, flag = true, num = 0;

while (flag){
    suma += num;
    num += 1;
    if(num > 100){
        flag = false;
    }
}

console.log(suma)