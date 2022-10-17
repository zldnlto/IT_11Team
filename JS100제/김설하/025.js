// 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어 주세요.

function circleArea(n) {
  return Math.PI * Math.pow(n, 2);
}

//test
circleArea(1); //3.141592653589793
circleArea(3); // 28.274333882308138
circleArea(10); // 314.1592653589793
