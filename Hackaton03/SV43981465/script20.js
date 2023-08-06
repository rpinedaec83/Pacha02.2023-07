// 20. Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
//¿Cuántos números son Pares?
//¿Cuál es el mayor de todos?
//Si el tercero es par, calcular el cuadrado del segundo.
//Si el primero es menor que el cuarto, calcular la media de los 4 números.
//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.

function operacionesConNumeros(num1, num2, num3, num4) {
    let pares = 0;
  
    // Encontrar el número mayor
    let mayor = num1;
    if (num2 > mayor) mayor = num2;
    if (num3 > mayor) mayor = num3;
    if (num4 > mayor) mayor = num4;
  
    // Si el tercero es par, calcular el cuadrado del segundo
    let cuadradoSegundo = 0;
    if (num3 % 2 === 0) {
      cuadradoSegundo = num2 * num2;
    }
  
    // Si el primero es menor que el cuarto, calcular la media de los 4 números
    let media = 0;
    if (num1 < num4) {
      media = (num1 + num2 + num3 + num4) / 4;
    }
  
    // Si el segundo es mayor que el tercero, verificar si el tercero está entre 50 y 700
    // Si cumple, calcular la suma de los 4 números
    let suma = 0;
    if (num2 > num3 && num3 >= 50 && num3 <= 700) {
      suma = num1 + num2 + num3 + num4;
    }
  
    // Contar cuántos números son pares
    if (num1 % 2 === 0) pares++;
    if (num2 % 2 === 0) pares++;
    if (num3 % 2 === 0) pares++;
    if (num4 % 2 === 0) pares++;
  
    return {
      pares,
      mayor,
      cuadradoSegundo,
      media,
      suma,
    };
  }
  
  // Ejemplo de uso
  let num1 = parseInt(prompt("Ingrese primer número:"));
  let num2 = parseInt(prompt("Ingrese segundo número:"));
  let num3 = parseInt(prompt("Ingrese tercer número:"));
  let num4 = parseInt(prompt("Ingrese cuarto número:"));
  
  const resultado = operacionesConNumeros(num1, num2, num3, num4);
  alert(`Cantidad de números pares: ${resultado.pares}`);
  alert(`El número mayor es: ${resultado.mayor}`);
  alert(`El cuadrado del segundo número si el tercero es par: ${resultado.cuadradoSegundo}`);
  alert(`La media de los 4 números si el primero es menor que el cuarto: ${resultado.media}`);
  alert(`La suma de los 4 números si el segundo es mayor que el tercero entre 50 y 700: ${resultado.suma}`);
  