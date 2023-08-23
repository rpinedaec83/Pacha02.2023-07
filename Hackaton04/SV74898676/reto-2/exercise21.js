const findNemo = (sentence) => {

    let words = sentence.split(' ');
    let nemo = words.findIndex(word => word === 'Nemo');
    let index = nemo + 1;

    return `I found Nemo at ${index}`
}

let result = findNemo('I am finding Nemo !');

console.log(result);