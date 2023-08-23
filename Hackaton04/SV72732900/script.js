
// 1)
const concatenar = (nombre, apellido, edad) => 
('Hola mi nombre es ' + nombre + ' ' + apellido + " y mi edad " + edad)

// 2)
function sumOfCubes(){
    return Array.prototype.reduce.call(arguments, 
        (acc,current) => (
        acc + Math.pow(current, 3)),
        0);
}

// 3)
function typevalue(a){
    return typeof a;
}

// 4)
function suma(...rest) {
    let total = 0;
    for (const value of rest) {
      total += value;
    }
    return total;
}

// 5)
function filterString(arra) {
    return arra.filter((value, index, arra)=>(typeof value != 'string'))
}

// 6)
function mixMax(arra) {
    return [Math.min(...arra), Math.max(...arra)]
}

// 7)
function formatPhoneNumber(a) {
        a.unshift("(")
        a.splice(4,0,")")
        a.splice(5,0," ")
        a.splice(9,0,"-")
        return a.join('');
}

// 8)
function findLargestNums(a){
    return a.map((value)=>(Math.max(...value)))
}

// 9)
function charIndex(a,b){
    return 'the first "' + b + '" has index ' 
    + a.indexOf(b) + ', the last "' + b + '" has index ' + a.lastIndexOf(b)
  }

// 10)
function toArray(a){
    return Object.entries(a)
}

// 11)
function getBudgets(a){
    return a.reduce((acc, current) => acc + current.budget, 0);
}

// 12)
function getStudentNames(a){
    return a.map((val)=>val.name);
}

// 13)
function objectToArray(a){
    return Object.entries(a)
}

// 14)
function squaresSum(a){
    let b = Array.from({length: a}, (_, i) => i + 1)
    return b.reduce((acc, current)=> acc + Math.pow(current,2) , 0)
}

// 15)
function multiplyByLength(a){
    return a.map((val, ind, arr)=>val * arr.length)
}

// 16)
function countdown(a){
    let b = Array.from({length: a}, (_, i) => i + 1)
    b.reverse().push(0)
    return b
}

// 17)
function diffMaxMin(a){
    return Math.max(...a) - Math.min(...a);
}

// 18)
function filterList(a){
    return a.filter((current)=>(Number.isInteger(current)))
}

// 19)
function repeat(value, times){
    return Array(times).fill(value)
}




