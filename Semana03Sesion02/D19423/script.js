for (let index = 0; index < 10; index++) {
    console.log(index);
}

let arr_frutas= ["manzana", "fresa", "uva"]

for (let index = 0; index < arr_frutas.length; index++) {
    const element = arr_frutas[index];
    console.log(element)
}

arr_frutas[0] ="naranja";

for (let index = 0; index < arr_frutas.length; index++) {
    const element = arr_frutas[index];
    console.log(element)
}

arr_frutas.forEach(element => { 
    if(element=="fresa"){
        console.log("te recomiendo un batido de fresa")
    }
    else{
        console.log("te recomiendo un jugo de "+ element)
    }

});

let bandera = true;

while (bandera) {
    arr_frutas.forEach(element => { 
        if(element=="fresa"){
            console.log("te recomiendo un batido de fresa")
            bandera = false
        }
        else{
            console.log("te recomiendo un jugo de "+ element)
        }
    
    });
}

let n = 0
while (n < 10) {
    n++
    console.log(n)
}

// do {
    
// } while (condition);

for (let index = 0; index < arr_frutas.length; index++) {
    const element = arr_frutas[index];
    console.log(element)
    if(element == "fresa"){
        break;
    }
}

for (const key in arr_frutas) {
    if (Object.hasOwnProperty.call(arr_frutas, key)) {
        const element = arr_frutas[key];
        console.log(element)
    }
}