const findLargestNums = (matrix) => {

    let max;
    let newMatrix = []

    matrix.forEach(item => {

        max = item[0];

        item.forEach(item2d => {

            if (item2d > max) {
                max = item2d;
            }
        })

        newMatrix.push(max);
    });

    return newMatrix;
}

let largestNumb = findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]);

console.log(largestNumb);

