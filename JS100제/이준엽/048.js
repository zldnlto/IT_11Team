/**
 * 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.
 */

function solution(str){
  return str.replace(/./g, str=> str === str.toUpperCase()? str.toLowerCase() : str.toUpperCase());
  
}

console.log(solution("AAABBBcccddd"));
console.log(solution("aaabbbCCCDDD"));