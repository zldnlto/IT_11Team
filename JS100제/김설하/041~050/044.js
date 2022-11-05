// 각 자리수의 합

let number = +prompt();
let sum = 0;
while (number > 0) {
  sum += number % 10;
  number = Math.floor(number / 10);
}
console.log(sum);
