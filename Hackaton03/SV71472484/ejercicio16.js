// 16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.

let numero = parseInt(prompt("Ingresar numero:"))

switch (numero) {
    case 1:
        document.write("Corresponde al dia Lunes")
        break;
    case 2:
        document.write("Corresponde al dia Martes")
        break;
    case 3:
        document.write("Corresponde al dia Miercoles")
        break;   
    case 4:
        document.write("Corresponde al dia Jueves")
        break; 
    case 5:
        document.write("Corresponde al dia Viernes")
        break; 
    case 6:
        document.write("Corresponde al dia Sabado")
        break; 
    case 7:
        document.write("Corresponde al dia Domingo")
        break;                                  
    default:
        document.write("Dia No valido")
        break;
}