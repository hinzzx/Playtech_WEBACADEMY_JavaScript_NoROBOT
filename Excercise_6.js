function fibonacci() {
  let fibonacci = [1, 1];
  let i = 2;
  while (fibonacci[i - 1] + fibonacci[i - 2] <= 500) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    i++;
  }

  return fibonacci;
}

console.log(fibonacci());



