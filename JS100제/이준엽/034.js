/**
 * 민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다. 

민주를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자.
(키는 공백으로 구분하여 입력됩니다.)

 */

function solution(str){
  let arr = str.split(' ').map(x=> parseInt(x));
  let count = 0;
  for(let i=0; i < arr.length; i++){
    for(let j=i+1; j < arr.length; j++){
      if(arr[i] > arr[j]){
        count++;
      }
    }
  }
  if(count > 0){
    return "NO";
  } else{
    return "YES";
  }
}

// console.log(solution("176 156 155 165 166 169"));
console.log(solution("155 156 165 166 169 176"));