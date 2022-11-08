//최댓값 구하기

let str = prompt();
// '10 9 8 7 6 5 4 3 2 1'

let maxNum = Math.max(...str.split(" ").map((v) => v * 1));
console.log(maxNum);
