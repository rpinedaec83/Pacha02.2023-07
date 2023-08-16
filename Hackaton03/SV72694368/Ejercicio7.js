function ejercicio7() {


    let op = prompt("Escoge tipo de membresía A / B / C");

    if (
        op.toLowerCase() === "a" ||
        op.toLowerCase() === "b" ||
        op.toLowerCase() === "c"
    ) {
        if (op.toLowerCase() === "a") {
            alert("Tiene un descuento del 10%");
        } else if (op.toLowerCase() === "b") {
            alert("Tiene un descuento del 15%");
        } else if (op.toLowerCase() === "c") {
            alert("Tiene un descuento del 20%");
        }
    } else {
        alert("Dato inválido");
    }
}

    ejercicio7();