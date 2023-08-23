function Ejercicio36() {
  let a = 0;
  let b = 1;
  let n1=prompt("Ingresa numero 1:")    
  let num = parseFloat(n1);

  console.log('Serie Fibonacci:');
  for (let i = 0; i <= num; i++) {
    console.log(a);
    let c = b + a;
    a = b;
    b = c;
  }
}

Ejercicio36();
