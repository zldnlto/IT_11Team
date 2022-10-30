// 1위 ~ 3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
// 학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.

// 입출력

// 입력 : 97 86 75 66 55 97 85 97 97 95
// 출력 : 6

// const points = prompt('학생 점수 입력').split(' ').sort((a, b) => b - a);

const arr = [97, 86, 75, 66, 55, 97, 85, 97, 97, 95].sort((a, b) => b - a);

let answer = Array(arr.length).fill(1)
for(i =0; i< arr.length; i++){
  for(j=0; j<arr.length; j++){
    if( arr[i]==arr[j]){
      answer[i]=answer[i]
    }else if(arr[i]<arr[j]){
      answer[i]++
    }

  }
}

console.log(answer);