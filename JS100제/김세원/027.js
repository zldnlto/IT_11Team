// 입력
// Yujin Hyewon
// 70 100

// 출력
// {'Yujin': 70, 'Hyewon': 100}


// 이건 답 보고 풀었습니다..

const keys = prompt("name?").split(" ");
const values = prompt("score?").split(" ");
const obj = {};

for (i=0; i < keys.length; i++) {
  obj[keys[i]] = parseInt(values[i])
}

console.log(obj);