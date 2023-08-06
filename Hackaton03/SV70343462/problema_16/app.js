let dia = prompt('Ingresar un número:');

switch (dia) {
    case '1':
        document.querySelector('.dia').innerHTML = `Lunes`;
        break;
    case '2':
        document.querySelector('.dia').innerHTML = `Martes`;
        break;
    case '3':
        document.querySelector('.dia').innerHTML = `Miercoles`;
        break;
    case '4':
        document.querySelector('.dia').innerHTML = `Jueves`;
        break;
    case '5':
        document.querySelector('.dia').innerHTML = `Viernes`;
        break;
    case '6':
        document.querySelector('.dia').innerHTML = `Sábado`;
        break;
    case '7':
        document.querySelector('.dia').innerHTML = `Domingo`;
        break;
    default:
        document.querySelector('.dia').innerHTML = `EL NÚMERO INGRESADO ES INCORRECTO!!!`;
        break;
}