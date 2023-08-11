let letra = prompt('Ingresar una letra:')

if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u' ){
    document.querySelector('.letra').innerHTML = `"${letra}" es una vocal.`
}
else if(letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O' || letra == 'U'){
    document.querySelector('.letra').innerHTML = `"${letra}" es una vocal.`
}
else {
    document.querySelector('.letra').innerHTML = `"${letra}" es una consonante.`
}