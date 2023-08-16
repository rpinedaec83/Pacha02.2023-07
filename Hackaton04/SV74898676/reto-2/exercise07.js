const formatPhoneNumber = (array) => {
    if (array.length !== 10)return ' ';

   return `(${array.slice(0, 3).join('')}) ${array.slice(3, 6).join('')} - ${array.slice(6).join('')}`
}

let phoneNumber = formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

console.log(phoneNumber);