/**
 * 영하네 반은 국어, 수학, 영어 시험을 보았다.
 * 영하는 친구들의 평균 점수를 구해주기로 했다.
 * 
 * 공백으로 구분하여 세 과목의 점수가 주어지면, 전체 평균 점수를 구하는 프로그램을 작성하라.
 * 단, 소수점 자리는 버린다.
 * 
 */

function average(score){
  let scor = score.split(' ');
  let sum = 0;
  let result = 0;
  for(let i=0; i < scor.length; i++){
    sum += parseInt(scor[i]);
  }
  result = parseInt(sum / scor.length);

  console.log(result);
}

average('20 30 40');
