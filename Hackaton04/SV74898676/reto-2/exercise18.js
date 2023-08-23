const filterList = (array) => {

    let newArray = [];

    return array.filter(item => typeof (item) === 'number');
}

let newList = filterList([1, 2, 3, "x", "y", 10]);

console.log(newList);