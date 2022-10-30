/*
# 문제37 : 반장 선거

새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 **학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램**을 작성하기로 하였습니다.

입력
원범 원범 혜원 혜원 혜원 혜원 유진 유진

출력
혜원(이)가 총 4표로 반장이 되었습니다.

답: 
const student = ["원범", "원범", "혜원", "혜원", "혜원", "혜원", "유진", "유진"];
let result = {};
let winner = "";

//배열을 객체로 가공. student 배열이 이 안에 들어가고 index는 0부터 증가한다. 맨처음에 index가 0일 때 생각해보면, 0일 때 student는 원범이다. 원범이 val에 들어가고, 만들었던 빈 객체에 원범이 들어가면, 원범이란 key가 생긴 것이다. 즉 {원범 : undefined}인 상태. result[원범]이 undefined와 같다면, 1을 반환한다. {원범 : 1}이 되고, 그 이후 똑같이 반복했을 때 원범의 key의 값은 1이기 때문에 1+1이 되서 2가 반환. 그 이후 반복.
for(let index in student){
    let val = studnet[index];
    result[val] = result[val] === undefined ? 1 : result[val] = result[val] + 1;
}
//이 keys의 매개변수로 들어가는 객체의 key값만 배열로 반환.
//reduce는 매개변수로 function을 갖는다. 두 개의 매개변수를 갖는데, 키 값으로 만든 배열의 원소 하나하나 순회하면서 a,b에 각각 대입하고 이 함수를 실현하게 한다. 
winner = Object.keys(result).reduce(function(a, b){
    console.log(a, b);
    return result[a]>result[b] ? a : b
});
console.log(winner);
console.log(`${winner}(이)가 총 ${result[winner]표로 반장이 되었습니다.`)

//사실 reduce 정확히 모르겠어서 인강을 보고 필기하면서 쓰기는 했는데, 제가 reduce에 대해 제대로 이해할 때쯤 다시 돌아와서 풀어야할 것 같아요.. 
*/