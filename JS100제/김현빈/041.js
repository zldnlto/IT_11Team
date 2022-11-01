// 문제41 : 소수판별

// 숫자가 주어지면 **소수인지 아닌지 판별하는 프로그램**을 작성해주세요.
// 소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
// (소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)

// 답

const num = prompt("숫자 입력");
let arr = [];
function prime(num) {
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  return arr.length === 2 ? "YES" : "NO";
}
prime(num);
