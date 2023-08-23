const filterValues = (array) => {
    return array.filter(item => typeof (item) !== 'string');
}

let newArray = filterValues([1, 2, 3, 'Gonzalo', 19 ,'Maria']);

console.log(newArray);