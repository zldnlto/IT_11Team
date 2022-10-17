/**
 * 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.
 * 
 * 두개를 합쳐 학생 이름이 key이고 value가 수학점수인 객체를 출력하라.
 */

function makeOb(name){

  let obj = {};
  let kv = name.split(' ');
  obj[kv[0]] = parseInt(kv[2]);
  obj[kv[1]] = parseInt(kv[3]);

  console.log(obj);
}

makeOb('Yujin Hyewon 70 100');