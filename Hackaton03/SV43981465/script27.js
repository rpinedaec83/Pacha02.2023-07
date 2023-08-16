// 27. Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.

function calcularMediaNumeros(){
    let sumatoria = 0;
    let cantidadNumeros = 0;

    while(true){
        const numero = parseFloat(prompt("Ingresa un número positivo (ingresa un número negativo para terminar):"));

        if(isNaN(numero)){
            alert("Error: Ingrese un número válido.");
            continue;
        }
        if(numero < 0){
            break;
        }
        sumatoria += numero;
        cantidadNumeros++;
    }
    if(cantidadNumeros == 0){
        alert("No se ingresaron números válidos.");
    }else{
        const media = sumatoria / cantidadNumeros;
        alert("La media de los números ingresados es: "+media.toFixed(2));
    }
}
calcularMediaNumeros();