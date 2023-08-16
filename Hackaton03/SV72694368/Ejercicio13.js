function ejercicio13() {
    let letra = prompt("Ingrese una letra:");

    if (
        letra === "a" ||
        letra === "e" ||
        letra === "i" ||
        letra === "o" ||
        letra === "u"
    ) {
        alert("El caracter "+ letra+ " es una vocal");
    } else {
        if (
            letra === "A" ||
            letra === "E" ||
            letra === "I" ||
            letra === "O" ||
            letra === "U"
        ) {
            alert("El caracter: "+ letra+ " es una vocal");
        } else {
            alert("El caracter: "+ letra+ " es una consonante");
        }
    }
}

    ejercicio13();