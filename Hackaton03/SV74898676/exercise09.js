let gananciaTrab = prompt('Ingresar ganancia de trabajador: ');
gananciaTrab = parseInt(gananciaTrab);

const obtenerAumento = (ganancia) => {
    return (ganancia >= 2000) ? ((ganancia * 5) / 100) : ((ganancia * 10) / 100);
}

let gananciaTotal = gananciaTrab + obtenerAumento(gananciaTrab);

alert('La ganancia total del trabajador con su aumento es de: ' + gananciaTotal);