let imp_compra;
let ganancia;

let cantidad = parseInt(prompt('Ingresar cantidad'));

imp_compra = parseFloat(imp_compra);
ganancia = parseFloat(ganancia);


if (cantidad <= 9) {
    imp_compra = 10 * cantidad;
}
else if(cantidad >= 10 && cantidad <= 99){
    imp_compra = 8 * cantidad;
}
else if(cantidad >= 100 && cantidad <= 499){
    imp_compra = 7 * cantidad;
}
else {
    imp_compra = 6 * cantidad;
}

ganancia = imp_compra * 0.825;

document.querySelector('.impcompra').innerHTML = `Precio total: S/.${imp_compra}`;
document.querySelector('.ganancia').innerHTML = `Ganancia: S/.${ganancia}`;





