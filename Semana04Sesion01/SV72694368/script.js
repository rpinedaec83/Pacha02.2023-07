function Saludar(nombre="Anonimo"){
    console.log("Hola "+nombre)
}
let nombre= "Roberto"

Saludar()
Saludar(nombre)

const fnc=()=>{console.log("Hola")}
fnc();

const fnc2=(nombre)=>console.log("Hola "+nombre)
const fnc3=o=>console.log("Hola "+o)
fnc3("David")
fnc2("David")

functionrestParam(a,b,c,...rest){
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(rest)
}

restParam(1,2,3,4,5,6,7,8,9,10)