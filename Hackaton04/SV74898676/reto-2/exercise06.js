const minMax = (array) => {
    let min, max;

    min = max = array[0];

    array.forEach((item) => {

        if (item < min) {
            min = item;
        }
        if (item > max) {
            max = item;
        }

    });

    return [min, max];
}

let minNumMaxNum = minMax([1, 2, 3, 4, 5]);

console.log(minNumMaxNum);

