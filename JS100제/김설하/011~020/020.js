//문제20 : 몫과 나머지
// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.
//출력: 5 0

function division1(n) {
  const temp = n.split(" ");
  return `${temp[0] / temp[1]} ${temp[0] % temp[1]}`;
}

//첫번째 시도는 위와 같았는데,
//위 함수는 "5 0"와 같이 문자열로 반환하는데 요구사항과 맞지 않다.

//찾아본 결과 자바스크립트에서 값 여러 개를 반환할 떄는 배열 형태로 반환해야 한다.

function division2(n) {
  const temp = n.split(" ");
  return [temp[0] / temp[1], temp[0] % temp[1]];
}

//파라미터 2개라고 간주 - 가독성이 더 좋아진다
function division3(a, b) {
  return [a / b, a % b];
}

//test

let n = "10 2";
division1(n);
division2(n);

// 파라미터 2개를 넘겨주는 division3 이 가장 문제의 의도와 적합하다고 볼 수 있을 듯하다.
division3(10, 2);
