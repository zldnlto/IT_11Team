/**
 * 2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.

예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.
 */

function solution(a,b){
  let day = new Date(2020, a-1, b);
  if(day.getDay() === 0){
    return 'SUN';
  } else if (day.getDay() === 1){
    return 'MON';
  } else if (day.getDay() === 2){
    return 'TUE';
  } else if(day.getDay() === 3){
    return 'WED';
  } else if (day.getDay() === 4){
    return 'THU';
  } else if (day.getDay() === 5){
    return 'FRI';
  } else if (day.getDay() === 6){
    return 'SAT';
  }
}

console.log(solution(1,1));