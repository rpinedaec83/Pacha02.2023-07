const objectToArray = (obj) => {

    let newArray = [];
    let entries = Object.entries(obj);

    for(const [key, val] of entries) {
        newArray.push([key, val]);
    }

    return newArray;
}

let objectToMatrix = objectToArray({
        likes: 2,
        dislikes: 3,
        followers: 10
    }
);

console.log(objectToMatrix);

