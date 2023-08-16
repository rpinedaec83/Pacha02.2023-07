const toArray = (obj) => {

    let newArray = [];
    let entries = Object.entries(obj);

    for (const [key, val] of entries) {
        newArray.push([key, val]);
    }

    return newArray;
}

let objectToArray = toArray({a: 1, b: 2});

console.log(objectToArray);