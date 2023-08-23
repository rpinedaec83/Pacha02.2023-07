const giveMeDataType = (item) => {
    return typeof (item);
}

integer = 20;
string = '20';

object = {
    'name': 'Gonzalo',
    'age': 20
};

console.log(giveMeDataType(object))