//4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.

const n1 = 46, n2 = 85, n3 = 29;

if (n1 < n2 && n1 < n3 ){
    console.log(n1);
    if(n2 < n3){
        console.log(n2);
        console.log(n3);
    }
    else{
        console.log(n3);
        console.log(n2);
    }
}
else{
    if (n2 < n3){
        console.log(n2)
        if (n1 < n3){
            console.log(n1)
            console.log(n3)
        } else{
            console.log(n3)
            console.log(n1)
        }
    } else{
        console.log(n3)
        if (n1 < n2){
            console.log(n1)
            console.log(n2)
        }else{
            console.log(n2)
            console.log(n1)
        }
    }
}