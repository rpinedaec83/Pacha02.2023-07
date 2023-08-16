/* 13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal. */

const letra = "e";

switch (letra) {
    case "A":; case "a":
    case "E":; case "e":
    case "I":; case "e":
    case "O":; case "o":
    case "U":; case "u":
                    console.log("Es una vocal");
                    break;
    default: console.log("Es una consonante")
        break;
}