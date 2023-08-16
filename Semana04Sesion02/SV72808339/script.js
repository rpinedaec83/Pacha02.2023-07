

let arr_autos = new Array(3);
arr_autos[0] = "BMW"
arr_autos[1] = "Mercedes"
arr_autos[2] = "Audi"
console.log(arr_autos);

let arr_aviones = ["F16", "SU35", "Mirage 2000"];
console.log(arr_aviones);
console.log(arr_aviones[2]);

console.log(arr_aviones.toString())

console.log(arr_aviones.length);

console.log(arr_aviones.sort());

console.log(arr_aviones[arr_aviones.length - 1]);

for (let i = 0; i < arr_aviones.length; i++) {
    console.log(arr_aviones[i])
};

arr_aviones.forEach(element => {
    console.log(element)
});

arr_aviones.push("Spitfire");

console.log(arr_aviones);

console.log(typeof arr_aviones);

console.log(arr_aviones.join("|"));
console.log(arr_aviones.join(" | "));
console.log(arr_aviones.join(" // "));

arr_aviones.pop();

console.log(arr_aviones);

arr_aviones.shift();
console.log(arr_aviones.join(" | "));

arr_aviones.unshift("F14")
console.log(arr_aviones.join(" | "));

let arr_vehiculos = arr_autos.concat(arr_aviones)
console.log(arr_vehiculos.join(" | "));

console.log(arr_aviones.reverse().join(" | "));

const mi_array = [
    [1,2],
    [3,4],
    [5,6]
];
console.log(mi_array);
const new_array = mi_array.flat()
console.log(new_array);

const frutas = ['Platano','Manzana','Naranja','Mango'];
console.log(frutas);
frutas.splice(2,0,'Limon','Uvas');
console.log(frutas);

const puntos = [21,50,56,143,8,42,95,7,123];
console.log(puntos.sort());

console.log(puntos.sort(function(a,b){ return a - b}));

console.log(puntos.sort(function(){return 0.5 - Math.random()}));