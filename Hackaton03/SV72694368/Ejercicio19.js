function ejercicio19() {
    
    let a=prompt('Ingrese el identificador del empleado (1: CAJERO 2: SERVIDOR 3: PREPARADOR DE MEZCLAS 4: MANTENIMIENTO')    
    let tipo = parseInt(a);
    let salario;
    salario = 0;

    let b=prompt('Ingrese los días trabajados')    
    let diaTrabajado = parseInt(b);

    switch (tipo) {
        case 1:
            salario = diaTrabajado * 56;
            break;
        case 2:
            salario = diaTrabajado * 64;
            break;
        case 3:
            salario = diaTrabajado * 80;
            break;
        case 4:
            salario = diaTrabajado * 48;
            break;
        default:
            alert('Tipo no válido');
            return;
    }
    alert('La cantidad a pagar es:'+ salario);
}

    ejercicio19();