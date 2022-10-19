// #39 19번문제

// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

function pow(n) {
  let nArr = n.split(" ");
  return Math.pow(nArr[0], nArr[1]);
}

//test
let n = "2 4";
let m = "3 2";

pow(n); //16
pow(m); //9
