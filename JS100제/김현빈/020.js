// 문제20 : 몫과 나머지
// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

// 입력 : 10 2
// 출력 : 5 0

// 1)
const num = prompt("공백으로 구분하여 두 숫자를 입력해 주세요. ex)10 2");
const numArr = num.split(" ").map((item) => Number(item));
const 몫 = parseInt(numArr[0] / numArr[1]);
const 나머지 = numArr[0] % numArr[1];
console.log(몫, 나머지);

// 2)
const numArr2 = prompt(
  "공백으로 구분하여 두 숫자를 입력해 주세요. ex)10 2"
).split(" ");
const num1 = parseInt(numArr2[0]);
const num2 = parseInt(numArr2[1]);
const 몫2 = parseInt(num1 / num2);
const 나머지2 = num1 % num2;
console.log(몫2, 나머지2);
