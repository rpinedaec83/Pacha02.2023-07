const charIndex = (word, carac) => {
    let fIndex = word.indexOf(carac);
    let lIndex = word.lastIndexOf(carac);

    if (fIndex === -1) return undefined;

    return [fIndex, lIndex];
}

console.log(charIndex('hello', 'l'));