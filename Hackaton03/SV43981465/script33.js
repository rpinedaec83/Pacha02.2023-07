// 33. Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.

function continuarPrograma() {
    let continuar;
  
    do {
      continuar = prompt("¿Deseas continuar con el programa? (Responde 'sí' o 'no')").toLowerCase();
    } while (continuar !== 'sí' && continuar !== 'no');
  
    return continuar === 'sí';
  }
  
  do {
    alert("El programa sigue ejecutándose...");
  
  } while (continuarPrograma());
  
  alert("El programa ha finalizado.");
  