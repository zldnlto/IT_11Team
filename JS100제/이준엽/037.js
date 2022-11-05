/**
 * 새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 하였습니다.
 * 
 * 입력 : 원범 원범 혜원 혜원 혜원 혜원 유진 유진
 * 출력 : 혜원(이)가 총 4표로 반장이 되었습니다.
 */

function solution(name){
  let arr = name.split(' ');
  let names = new Set(arr);
  let obj = {};
  for(let i of names){
    obj[i] = 0;
  }
  for(let i of arr){
    for(let j in obj){
      if(i === j){
        obj[j] += 1;
      }
    }
  }
  let votes = Object.values(obj);
  let max = Math.max(...votes);
  let who = '';
  for(let i in obj){
    if(obj[i] === max){
      who = i;
    }
  }
  console.log(`${who}(이)가 총 ${max}표로 반장이 되었습니다.`)
}

solution("원범 원범 혜원 혜원 혜원 유진 유진 유진 유진 유진 유진");