// # 문제37 : 반장 선거
// 입력
// 원범 원범 혜원 혜원 혜원 혜원 유진 유진

// 출력
// 혜원(이)가 총 4표로 반장이 되었습니다.

const list = ["원범", "원범", "혜원", "혜원", "혜원", "혜원", "유진", "유진"];

let set = new Set(list)

for (const i of set) {
  console.log(i, list.filter(e=> e===i));
}

// https://paullabworkspace.notion.site/6-Map-Set-05e7902b0cff4e2b9464c2461adf81ea#481dd0f4530c49f89614a47d54b6b56d