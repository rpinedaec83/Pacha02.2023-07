const diffMaxMin = (array) => {
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

    return max - min;
}

let resultDiff = diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]);

console.log(resultDiff);
