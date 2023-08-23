const repeat = (elemento, tiempos) => {
    return Array.from({length: tiempos}, (_, i) => elemento);
}

let result = repeat(13, 5);

console.log(result);