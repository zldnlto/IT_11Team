// 새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다. 그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 하였습니다.

// # 문제37 : 반장 선거
// 입력
// 원범 원범 혜원 혜원 혜원 혜원 유진 유진

// 출력
// 혜원(이)가 총 4표로 반장이 되었습니다.

//빈도수세기 - 객체 이용 value값을 비교해서 가장 큰 key값
function mostVotes(Obj) {
  const temp = Object.values(Obj); //[2, 4, 2]
  const mostVotes = Math.max(...temp);
  const studentArr = Object.entries(Obj); //[['원범',2],['혜원',4],['유진',2]]
  return studentArr.filter((student) => student[1] === mostVotes);
}

function pickMeUp(str) {
  const students = str.split(" ");
  const vote = {};
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    vote[student] ? (vote[student] += 1) : (vote[student] = 1);
  }
  const leader = mostVotes(vote); // [['혜원', 4]]

  return `${leader[0][0]}(이)가 총 ${leader[0][1]} 표로 반장이 되었습니다.`;
}

//다른 시도 (변수가 너무 많이 쓰였다)
//Set으로 중복 제거 -> 선거 나온 학생 목록만 출력
//선거 나온 학생 이름으로 배열 쪼개서 배열 길이가 가장 긴 사람이 반장

function teamLeader(str) {
  const students = str.split(" ");
  const mySet = new Set([...students]);
  const count = [];

  for (let i = 0; i < [...mySet].length; i++) {
    let student = [...mySet][i];
    count.push(str.split(student).length - 1);
  }
  const maxCount = Math.max(...count);
  const idx = count.indexOf(maxCount);

  return `${[...mySet][idx]}(이)가 총 ${maxCount}표로 반장이 되었습니다.`;
}

let str = "원범 원범 혜원 혜원 혜원 혜원 유진 유진";
teamLeader("원범 원범 혜원 혜원 혜원 혜원 유진 유진");
pickMeUp("원범 원범 혜원 혜원 혜원 혜원 유진 유진");
