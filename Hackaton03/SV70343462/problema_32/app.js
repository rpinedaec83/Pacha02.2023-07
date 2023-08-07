let continuar = "";

do {
    alert("Hola");

    continuar = prompt("¿Deseas continuar con el programa? (S/N): ");
} while (continuar !== "n" && continuar !== "N");

document.querySelector('.mensaje').innerHTML = `FIN DEL PROGRAMA!!!✋`