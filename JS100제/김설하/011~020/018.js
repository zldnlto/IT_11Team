//국어, 수학, 영어 시험 평균 점수

//공백으로 구분하여 세 과목의 점수가 주어지면 **전체 평균 점수**를 구하는 프로그램을 작성하세요.
//**단, 소숫점 자리는 모두 버립니다.**

//1
function calcAverage(score) {
  const scoreArr = score.split(" ");
  const average =
    scoreArr.reduce((acc, cur) => acc + parseInt(cur), 0) / scoreArr.length;

  return average.toFixed(0);
}

//2
function calcAverage(score) {
  const scoreArr = score.split(" ").map((n) => +n);
  let sum = 0;
  scoreArr.forEach((n) => (sum += n));
  return Math.floor(sum / scoreArr.length);
}

//test
calcAverage("60 70 80");
calcAverage("55 32 90");
