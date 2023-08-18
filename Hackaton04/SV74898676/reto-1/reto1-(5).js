const calculator = (num1, num2, oper) => {
  
  switch(oper) {

    case '+':
      return num1 + num2;
      break;

    case '-':
      return num1 - num2;
      break;
      
    case '*':
      return num1 * num2;
      break;

    case '/':
      return (num2 !== 0) ? num1 / num2 : -1;
      break;

    case '%':
      return parseInt(num1) % parseInt(num2);
      break;

    default:
      return undefined;
  }
}

let result = calculator(5, 2, '*');

if (result != undefined) {
  console.log(result);
}
else {
  console.log('El parámetro no es reconocido');
}

