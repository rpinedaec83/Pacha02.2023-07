// Crear una función que reciba un array de valores y filtre los valores que no son string

function filtrarString(arreglo){
    return arreglo.filter((valor) => typeof valor == 'string');
}

const valores = [1, true, {}, "hola", [], false, 4, "chau"];
const stringsFiltrados = filtrarString(valores);
alert(stringsFiltrados);


