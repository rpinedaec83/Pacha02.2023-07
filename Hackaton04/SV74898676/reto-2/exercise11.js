
const getBudgets = (arrayObj) => {

    let budget = 0;

    arrayObj.forEach(item => {

        budget += item.budget;

    });

    return budget;
}

let totalBudget = getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }]);

console.log(totalBudget);