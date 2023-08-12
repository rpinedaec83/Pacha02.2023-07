let hora = prompt('Ingresar hora');

segundos = hora * 3600;

document.querySelector('.hora').innerHTML = `${hora}h es ${segundos} segundos`;

