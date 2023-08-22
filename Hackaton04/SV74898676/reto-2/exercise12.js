const getStudentsNames = (arrayObj) => {

    let newArray = [];

    arrayObj.forEach(item => {
        newArray.push(item.name);
    });

    return newArray;
}

let names = getStudentsNames([
        { name: "Steve" },
        { name: "Mike" },
        { name: "John" }
    ]);

console.log(names);
