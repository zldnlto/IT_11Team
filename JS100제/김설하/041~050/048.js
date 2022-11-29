// 대소문자 바꿔 출력하기

// 입력 : AAABBBcccddd
// 출력 : aaabbbCCCDDD

let str = prompt();

console.log(
  str
    .split("")
    .map((v) => (v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()))
    .join("")
);

//함수

function changeCase(str) {
  return str
    .split("")
    .map((v) => (v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()))
    .join("");
}

changeCase("AAABBBcccddd");
