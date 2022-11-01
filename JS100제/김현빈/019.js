//  문제19 : 제곱을 구하자
// 공백으로 구분하여 두 숫자 a와 b가 주어지면, **a의 b승**을 구하는 프로그램을 작성하세요.

const num = prompt("공백으로 구분하여 두 숫자를 입력해 주세요. ex) 2 3");
const numArr = num.split(" ").map((item) => Number(item));
console.log(Math.pow(numArr[0], numArr[1]));

// 변수 num을 array로 만들고 map을 이용해 parseInt를 적용하니 4, 0.5와 같이 float형을 입력했을 때 정수로 변환되어 올바른 값을 출력하지 않음. 그래서 Number 적용함.
