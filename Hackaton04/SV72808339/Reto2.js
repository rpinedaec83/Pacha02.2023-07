console.log(`
Función 1:`)
const presentacion = (nombre,apellido,edad) => {
    console.log("Hola mi nombre es "+nombre,apellido+" y mi edad "+edad)
}
presentacion('Fabricio','Oliva',18);
console.log()

//-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR
console.log("Función 2:")
function cubos_sumados(a,b,c) {
    let suma = a**3 + b**3 + c**3
    console.log(`La suma de todos los números al cubo es: ${suma}`)
}
cubos_sumados(1,5,9)
console.log()

//-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR
console.log("Función 3:")
function obtener_tipo(valor){
    console.log(`"${valor}" es un: ${typeof valor}`)
}
obtener_tipo(3)
obtener_tipo("Hola Mundo")
obtener_tipo([1,2,3,4,5])
console.log()

//-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR
console.log("Función 4:")
function suma(...numeros){
    let total = 0;
    for (let n of numeros){
        total += n;
    }
    console.log(`La suma es de: ${total}`)
}
suma(2,3,5)
suma(32,89,50,24,10)
console.log()

//-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR
console.log("Función 5:")
function filtrar(array){
    array.forEach(element => {
        if (typeof element === 'string'){
        console.log(element)
        }
    });
}
const valores = [12,"oso",true,"carpincho",78,[8,4,3],"comadreja"]
console.log(valores.join(' | ')+`
`)
filtrar(valores)
console.log()

//-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR
console.log("Función 6:")
function min_max(numeros){
    let minimo = numeros[0];
    let maximo = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        const e = numeros[i]
        if (e < minimo){
            minimo = e;
        }
        if (e > maximo){
            maximo = e;
        }
    }
    console.log([minimo,maximo])
}
const matriz = [1,2,3,4,5]
min_max(matriz)
console.log()

//-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR
console.log("Función 7:")
function telefono(m){
    let flag = true;
    for (let i = 0; i < m.length; i++){
        const e = m[i]
        if (e > 9 || e < 0){
            console.log("Solo números del 0-9")
            flag = false;
        }
    
    }
    if(flag){
    console.log(`(${m[0]}${m[1]}${m[2]}) ${m[3]}${m[4]}${m[5]}-${m[6]}${m[7]}${m[8]}${m[9]}`)}
}
const numero = [1,2,3,4,5,6,7,8,9,0]
telefono(numero)
console.log()

//-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR
console.log("Función 8:")
function numeros_mayores(matriz){
    let mayores = [];
    for (let i = 0; i < matriz.length; i++) {
        const j = matriz[i];
        let max = j[0]
        for (let e = 0; e < j.length; e++) {
            const n = j[e];
            if (n > max){
                max = n;
            }
        }
        mayores.push(max)
    }
    console.log(mayores)
}
numeros_mayores([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])
console.log()

//-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR
console.log("Función 9:")
function findex(cadena,l){
    let resultado = []
    for (let i = 0; i < cadena.length; i++) {
        const element = cadena[i];
        if (element===l){
            resultado.push(i)
        }
    }
    console.log(cadena)
    console.log(`La primera "${l}" encontrada está en el índice ${resultado[0]} y la última "${l}" en el índice ${resultado[resultado.length-1]}`)
}
findex("hello","l")
findex("circumlocution","c")
console.log()

//-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR
console.log("Función 10:")
function convertir(objeto){
    console.log(Object.entries(objeto));
}
convertir({a: 1, b: 2})
console.log()

//-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR
console.log("Función 11:")
function presupuesto(matriz){
    let suma = 0;
    for (let i = 0; i < matriz.length;i++){
        suma += matriz[i].budget
    }
    console.log(`El presupuesto total es de: ${suma}`)
}
presupuesto([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ])
console.log()

//-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR
console.log("Función 12:")
function obtener_nombres(matriz){
    let nombres = [];
    for (let i = 0; i < matriz.length; i++){
        nombres.push(matriz[i].name);
    }
    console.log(nombres)
}
obtener_nombres([
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
  ])
console.log()

//-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR
console.log("Función 13:")
function transformar(objeto){
    let matriz = [];
    matriz.push(Object.entries(objeto));
    console.log(matriz)
}
convertir({
    likes: 2,
    dislikes: 3,
    followers: 10
  }
  )
console.log()

//-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR
console.log("Función 14:")
function cuadrados_sumados(n) {
    let suma = 0;
    let texto = "";
    let calculo = "";
    for (let i = 1; i <= n;i++){
        if (i === n){
            texto = texto + `${i}^2 =`
            calculo = calculo + `${i**2} =`
        }else{
            texto = texto + `${i}^2 + `
            calculo = calculo + `${i**2} + `
        }
        suma += i**2
    }
    console.log(texto);
    console.log(calculo);
    console.log(`= ${suma}`);
}
cuadrados_sumados(3)
console.log()

//-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR
console.log("Función 15:")
function multiplicar(matriz){
    for (let i = 0; i < matriz.length; i++){
        matriz[i] = matriz[i] * matriz.length;
    }
    console.log(matriz)
}
multiplicar([2, 3, 1, 0])
console.log()

//-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR
console.log("Función 16:")
function countdown(numero){
    let matriz = [];
    for (let i = numero; i >= 0; i--) {
        matriz.push(i)
    }
    console.log(matriz)
}
countdown(5)
console.log()

//-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR
console.log("Función 17:")
function diferencia(matriz){
    let mayor = matriz[0]
    let menor = matriz[0]
    let diff = 0;
    for (let i = 0; i < matriz.length; i++){
        const e = matriz[i];
        if (e > mayor){
            mayor = e;
        }
        if (e < menor){
            menor = e;
        }
    }
    diff = mayor - menor
    console.log(`La diferencia entre ${mayor} y ${menor} es de: ${diff}`)
}
diferencia([10, 4, 1, 4, -10, -50, 32, 21])
console.log()

//-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR
console.log("Función 18:")
function filtrar_lista(list){
    let filtrado = []; 
    for (let i = 0; i < list.length; i++){
        const e = list[i];
        if (typeof e === 'number'){
            filtrado.push(e)
        }
    }
    console.log(filtrado)
}
filtrar_lista([1, 2, 3, "x", "y", 10])
console.log()

//-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR
console.log("Función 19:")
function repetir(element,veces){
    let matriz = [];
    for (i = 0; i < veces; i++){
        matriz.push(element)
    }
    console.log(matriz)
}
repetir(13,5);
console.log()

//-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR
console.log("Función 20:")
String.prototype.vreplace = function(v){
    const chars = this.split('');
    for (i = 0; i < chars.length ;i++){
        const e = chars[i];
        switch(e) {
            case "A":
            case "a":
            case "E":
            case "e":
            case "I":
            case "i":
            case "O":
            case "o":
            case "U":
            case "u":
                chars[i] = v;
                break;
            default:
        }
    }
    console.log(chars.join(''))
}
const cadena = "apples and bananas";
cadena.vreplace("u")
console.log()

//-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR
console.log("Función 21:")
function find_nemo(cadena){
    const palabras = cadena.split(' ');
    const posicion = palabras.findIndex(palabra => palabra === "Nemo")
    console.log(`Encontré a nemo en la palabra ${posicion+1}`)
}
find_nemo("Apuesto a que nunca podrás encontrar a Nemo sin importar cuánto intentes")
console.log()

//-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR-DIVISOR
console.log("Función 22:")
function cap_last(cadena){
    const palabra = cadena.split('')
    let last = palabra[palabra.length-1]
    last = last.toString()
    palabra[palabra.length-1] = last.toUpperCase()
    console.log(palabra.join(''))
}
cap_last("hello")
console.log()