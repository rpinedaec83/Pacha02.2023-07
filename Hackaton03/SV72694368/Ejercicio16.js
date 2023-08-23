function ejercicio16() {
    let n1=prompt("Ingresa un numero (1-7):")    
    let dia = parseFloat(n1);

    switch (dia) {
        case 1:
            alert("Lunes");
            break;
        case 2:
            alert("Martes");
            break;
        case 3:
            alert("Miércoles");
            break;
        case 4:
            alert("Jueves");
            break;
        case 5:
            alert("Viernes");
            break;
        case 6:
            alert("Sábado");
            break;
        case 7:
            alert("Domingo");
            break;
        default:
            alert("Día inválido");
            break;
    }
}

    ejercicio16();