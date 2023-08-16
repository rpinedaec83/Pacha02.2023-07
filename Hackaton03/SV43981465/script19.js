// 19. Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
//Cajero (56$/día).
//Servidor (64$/día).
//Preparador de mezclas (80$/día).
//Mantenimiento (48$/día).
//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó.

function calcularPagoEmpleado(identificador, diasTrabajados) {
    let salarioDiario;
    switch (identificador) {
      case 1:
        salarioDiario = 56;
        break;
      case 2:
        salarioDiario = 64;
        break;
      case 3:
        salarioDiario = 80;
        break;
      case 4:
        salarioDiario = 48;
        break;
      default:
        return 'Identificador de empleado inválido';
    }
  
    if (diasTrabajados < 1 || diasTrabajados > 6) {
      return 'Cantidad de días trabajados inválida';
    }
  
    const salarioTotal = salarioDiario * diasTrabajados;
    return salarioTotal;
  }
  
  // Ejemplo de uso
  let numeroIdentificador = parseInt(prompt("Ingrese identificador del empleado:"));
  let diasTrabajadosSemana = parseInt(prompt("Ingrese los días trabajados del empleado:"));
  
  const pagoEmpleado = calcularPagoEmpleado(numeroIdentificador, diasTrabajadosSemana);
  if (typeof pagoEmpleado === 'number') {
    alert(`El empleado con identificador ${numeroIdentificador} trabajó ${diasTrabajadosSemana} días y debe recibir $${pagoEmpleado} de pago.`);
  } else {
    alert(pagoEmpleado);
  }
  