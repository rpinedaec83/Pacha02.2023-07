function sumar(n1, n2)
{
    let resultado;
    resultado = n1 + n2;
    return resultado;
}
console.log("Resultado: "+ sumar(4, 10) );
/*Mostrar resultado*/

function potencia(n1, n2)
{
    let resultado;
    resultado = Math.pow(n1,n2);
    return resultado;
}
console.log("Resultado: "+ potencia(2, 3) );


function sumacubos(valor)
{
if (valor<0) {
    return null;
    
}
let sumacubos=0;
for (let i = 0; i <=valor ; i++) {
 sumacubos += Math.pow(i,3);
    
}
return sumacubos;
}
try{
    console.log(sumacubos(1));
}catch(e){
    console.log(`Error: ${e.message}`);
    
}
function sumcub(n1,n2,n3){
    let resultado;
    resultado = Math.pow(n1,3)+Math.pow(n2,3)+Math.pow(n3,3);
    return resultado;
}
console.log("Suma de cubos: "+ sumcub(1,5,9) );

function areatriangulo(base,altura){
    let area;
    area=(base*altura)/2;
    return area;
}
console.log("Area de triangulo: "+ areatriangulo(4,5) );

function calculadora(n1,a,n2){
    let res=0;
    if (a=='+') {
        res=n1+n2;
        console.log("La suma es :"+res);
        return res;
    }else if(a=='-'){
        res=n1-n2;
        console.log("La resta es :"+res);
        return res;
    }else if(a=='*'){
        res=n1*n2;
        console.log("La multiplicacion es :"+res);
        return res;
    }else if(a=='/'){
        res=n1/n2;
        console.log("La division es :"+res);
        return res;
    }
    }
    calculadora(20,"*",5);

    