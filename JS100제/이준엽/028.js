/**
 * 문제 28
 * 2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법이다.
 */

function solution(str){
  let answer = '';

  answer += str[0];
  for(let i=1; i<str.length-1; i++){
    for(let j=1; j <= 2; j++){
      answer += str[i];
    }
  }

  answer += str[str.length-1];
  // 위의 식까지 진행하면 Jaavvaassccrriippt

  

  return answer;
}

console.log(solution('Javascript'));