// # 문제37 : 반장 선거
// 입력
// 원범 원범 혜원 혜원 혜원 혜원 유진 유진

// 출력
// 혜원(이)가 총 4표로 반장이 되었습니다.

const list = ["원범", "원범", "혜원", "혜원", "혜원", "혜원", "유진", "유진"];

let set = new Set(list)

for (const i of set) {
  console.log(i, list.filter(e=> e===i).length);
}

// https://paullabworkspace.notion.site/6-Map-Set-05e7902b0cff4e2b9464c2461adf81ea#481dd0f4530c49f89614a47d54b6b56d

const array = prompt('이름을 입력해주세요.').split(' ');
let result = {};
let winner = "";

for(let index in array){
  let val = array[index];
  result[val] = result[val] === undefined ? 1 : result[val] = result[val] + 1;
}

winner = Object.keys(result).reduce(function(a, b){
  return result[a] > result[b] ? a : b
});

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);