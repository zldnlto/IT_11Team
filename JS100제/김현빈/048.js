// 문제48 : 대소문자 바꿔서 출력하기

// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

// 입출력

// 입력 : AAABBBcccddd
// 출력 : aaabbbCCCDDD

let str = prompt("입력하세요.").split("");
let arr = [];
function change(str) {
  for (let n of str) {
    if (n === n.toLowerCase()) {
      arr.push(n.toUpperCase());
    } else {
      arr.push(n.toLowerCase());
    }
  }
  return arr.join("");
}

console.log(change(str));
