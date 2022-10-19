// 우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
// 이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

// 행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.

//setting

let planetsKor = [
  "수성",
  "금성",
  "지구",
  "화성",
  "목성",
  "토성",
  "천왕성",
  "해왕성",
];
let planetsEng = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

//solution 1
function engName(str) {
  let idx = planetsKor.indexOf(str);
  if (idx === -1) {
    return "태양계 행성이 아닙니다.";
  } else {
    return planetsEng[idx];
  }
}

//solution 2 그냥 해봄..
//배열 합쳐서 2차원 배열 생성 => [수성, Mercury]
//배열 합치고 arr[0]에서 한글 이름 찾은 후 arr[1] 영어 이름 반환
const array = Array(8)
  .fill(null)
  .map(() => Array());
const temp = [...planetsKor, ...planetsEng];
for (let i = 0; i < planetsKor.length; i++) {
  (array[i][0] = planetsKor[i]), (array[i][1] = planetsEng[i]);
}

function engName2(str) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] === str) {
      return array[i][1];
    }
  }
}

//solution 3 - Map 자료형 써보기
let m = new Map();
for (let i = 0; i < planetsKor.length; i++) {
  m.set(planetsKor[i], planetsEng[i]);
}

function engName3(str) {
  if (m.has(str)) return m.get(str);
}

//test

engName(수성);
engName(금성);
engName(목성);
engName(해왕성);
