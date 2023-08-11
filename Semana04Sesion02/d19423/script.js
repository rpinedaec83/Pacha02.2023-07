

let arr_autos = new Array(3);
arr_autos[0] ="bmw"
arr_autos[1]= "mercedes"
console.log(arr_autos)

let arr_aviones = ["F16", "SU35", "Panavia Tornado"]
console.log(arr_aviones)

console.log(arr_aviones[2])

console.log(arr_aviones.toString())

console.log(arr_aviones.length)
console.log(arr_aviones.sort())

console.log(arr_aviones[arr_aviones.length - 1])

for (let index = 0; index < arr_aviones.length; index++) {
    const element = arr_aviones[index];
    console.log(element);
}
arr_aviones.forEach(element => {
    console.log(element)
});

arr_aviones.push("F18 Hornet")

arr_aviones.forEach(element => {
    console.log(element)
});

console.log(typeof arr_aviones)

if(Array.isArray(arr_aviones)){
    console.log("Si es un array")
}
else{
    console.log("No es un array")
}

console.log(arr_aviones.join("|"))
console.log(arr_aviones.join("*"))

arr_aviones.pop()
console.log(arr_aviones.join("*"))
arr_aviones.push("F18 Hornet")
console.log(arr_aviones.join("*"))

arr_aviones.shift()
console.log(arr_aviones.join("|"))

arr_aviones.unshift("F35")
console.log(arr_aviones.join("|"))

let arr_transporte = arr_autos.concat(arr_aviones)
console.log(arr_transporte)

const myArr = [
    [1,2],
    [3,4],
    [5,6]
];
console.log(myArr)
const newArr = myArr.flat();
console.log(newArr)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits)

fruits.sort();
console.log(fruits)
fruits.reverse();
console.log(fruits)

const points = [40, 100, 1, 5, 25, 10];
points.sort()
console.log(points)
points.sort(function(a, b){return  a - b});
console.log(points)

points.sort(function(){return 0.5 - Math.random()});
console.log(points)

for (let i = points.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let k = points[i];
    points[i] = points[j];
    points[j] = k;
  }
  console.log(points)


  const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
console.log(cars)
  cars.sort(function(a, b){return a.year - b.year});
console.log(cars)

cars.sort(function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
  console.log(cars)

  cars.forEach(iterar)

  function iterar(value, index, array){
    console.log(value.year)
    console.log(index)
  }

  cars.forEach(element => {
    console.log(element)
});

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
console.log(numbers2)

const myArr2 = [1, 2, 3, 4, 5, 6];
const newArr2 = myArr2.flatMap((x) => x * 2);
console.log(newArr2)

const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(numbers)
console.log(over18)

const numbers3 = [45, 4, 9, 16, 25];
let sum = numbers3.reduce(myFunction,100);

function myFunction(total, value, index, array) {
  return total + value;
}

console.log(sum)

const numbers5 = [45, 4, 9, 16, 25];
let allOver18 = numbers5.every(myFunction5);

function myFunction5(value) {
  return value > 3;
}
console.log(allOver18)

const numbers6 = [45, 4, 9, 16, 25];
let someOver18 = numbers6.some(myFunction6);

function myFunction6(value, index, array) {
  return value > 18;
}
console.log(someOver18)

let position = fruits.indexOf("Apple") + 1;
console.log(position)

const numbers7 = [4, 9, 16, 25, 29];
let first = numbers7.find(myFunction7);

function myFunction7(value, index, array) {
  return value > 18;
}
console.log(first)

const numbers8 = [4, 9, 16, 25, 29];
let first8 = numbers8.findIndex(myFunction8);

function myFunction8(value, index, array) {
  return value > 18;
}
console.log(first8)

let nuevo_array = Array.from("ABCDEFG");
console.log(nuevo_array)

//let str_dni = prompt("Escribe tu dni")
//let arr_dni = Array.from(str_dni)
//console.log(arr_dni)


/////////////////////////

const d = new Date();
console.log(d)
const d1 = new Date("1983-08-28 11:00:00 -5")
console.log(d1)

const d2 = new Date(1691722687000)
console.log(d2)
console.log(d2.toDateString())

let objectDate = new Date();


let day = objectDate.getDate();
console.log(day); // 23

let month = objectDate.getMonth();
console.log(month + 1); // 8

let year = objectDate.getFullYear();
console.log(year); // 2022


let format1 = month + "/" + day + "/" + year;
console.log(format1); // 7/23/2022

let format2 = day + "/" + month + "/" + year;
console.log(format2); // 23/7/2022

let format3 = month + "-" + day + "-" + year;
console.log(format3); // 7-23-2022

let format4 = day + "-" + month + "-" + year;
console.log(format4); // 23-7-2022

let dateFormat1 = moment().format('D-MM-YYYY');
console.log(dateFormat1); // 23-08-2022

let dateFormat2 = moment().format('D/MM/YYYY');
console.log(dateFormat2); // 23/08/2022

let dateFormat3 = moment().format('MM-D-YYYY');
console.log(dateFormat3); // 08-23-2022

let dateFormat4 = moment().format('MM/D/YYYY');
console.log(dateFormat4); // 08/23/2022


let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)

let text1 = "Please visit Microsoft!";
let newText = text1.replace("Microsoft", "W3Schools");
console.log(newText)

let text2 = "5";
let padded = text2.padStart(4,"*");
console.log(padded)

let str_aviones = "F16|Panavia Tornado|SU35|F18 Hornet"
let arr_aviones2 = str_aviones.split("|")
console.log(arr_aviones2)