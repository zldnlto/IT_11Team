// 문제16 : 로꾸거
// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

// 입력 : 거꾸로
// 출력 : 로꾸거

const str = prompt("문장을 입력하세요");
const strArr = str.split("");
const reverseStr = strArr.reverse().join("");
console.log(reverseStr);
