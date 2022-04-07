// Извеждане на всички положителни числа от масива

let numbers = [ -21, -12, -11, -9, -5, 0, 1, 6, 17, 20, 22 ];
let positive = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    positive.push(numbers[i]);
  }
}
  console.log(positive.join(" "));

// Със функция

function positiveNums (numbers) {
  let positive = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positive.push(numbers[i]);
    }
  }
  return positive.join(" ");
}