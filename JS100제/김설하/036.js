// 1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

// 입출력

// 입력 : 2
// 출력 : 2 4 6 8 10 12 14 16 18

function gugudan(n) {
  let gugudan = [];
  for (let i = 1; i <= 9; i++) {
    gugudan.push(n * i);
  }
  return gugudan.join(" ");
}

//test
gugudan(2);
