function suma(a,b) {
    console.log(`${a} + ${b} = ${a+b}`);
}
console.log(`Función suma dos números:`)
suma(10,5)
console.log()
//------------------------------------
function potencia(n,a) {
    console.log(`${n}^${a} = ${n**a} `);
}
console.log(`Función potencia:`)
potencia(8,3)
console.log()
//------------------------------------
function cubos_sumados(a,b,c) {
    let suma = a**3 + b**3 + c**3
    console.log(`La suma del cubo de todos los números es: ${suma}`)
}
console.log(`Función suma de potencias:`)
cubos_sumados(1,5,9)
console.log()
//------------------------------------
function tri_area(b,a) {
    console.log(`El área del triángulo es de: ${(b*a) / 2}` )
}
console.log(`Función área del triángulo`)
tri_area(3,2)
console.log()
//------------------------------------
function calculator(n1,opc,n2) {
    switch (opc) {
        case "+": console.log(`${n1} ${opc} ${n2} = ${n1 + n2}`)
        break;
        case "-": console.log(`${n1} ${opc} ${n2} = ${n1 - n2}`)
        break;
        case "/": console.log(`${n1} ${opc} ${n2} = ${n1 / n2}`)
        break;
        case "x": console.log(`${n1} ${opc} ${n2} = ${n1 * n2}`)
        break;
        case "%": console.log(`${n1} ${opc} ${n2} = ${n1 % n2}`)
        break;
        default: console.log("El parámetro no es reconocido.")
        break;
    }
}
console.log("Función calculadora")
calculator(10,"+",25)
calculator(15,"-",7)
calculator(20,"/",4)
calculator(8,"x",6)
calculator(25,"%",7)
calculator(12,"resta",11)
console.log()
//------------------------------------
console.log()
console.log("¿Cómo defines una función?")
console.log()
console.log(`Las funciones se definen con la siguiente sintaxis:
function nombre_de_la_funcion (parametros) {
    //Aquí poner las acciones que realizará
    //la función utilizando los parámetros.
}
`)
console.log(`¿Hasta cuantos argumentos puedes declarar en una función?`)
console.log(`
No existe un límite definido de argumentos que puedes declarar en una función.
Sin embargo es recomendable utilizar una cantidad de argumentos razonable que no
ingluya de manera negativa en el rendimiento del algoritmo ni en la legibilidad
del código.`)