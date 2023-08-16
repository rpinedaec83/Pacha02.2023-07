// Escriba una función que convierta un objeto en una matriz de claves y valores.
//objectToArray({
//    likes: 2,
//    dislikes: 3,
//    followers: 10
//  }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

/*function objectToArray(objeto){
    return Object.entries(objeto);
}*/
const objectToArray = objeto => Object.entries(objeto);

const objeto = {
    likes: 2,
    dislikes: 3,
    followers: 10
};
const resultado = objectToArray(objeto);
alert(resultado);
  