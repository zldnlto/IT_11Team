/**
 * 숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요.
소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
(소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)
 */

function solution(num){
  let answer = '';
  // 약수를 구해서 본인과 1만 있다면 YES 아니라면 NO
  let arr = [];
  for(let i=1; i <= num; i++){
    if(Number.isInteger(num / i)){
      arr.push(i);
    }
  }
  if(arr.length === 2){
    answer = "YES";
  } else {
    answer = "NO";
  }
  return answer;
}

console.log(solution(18));