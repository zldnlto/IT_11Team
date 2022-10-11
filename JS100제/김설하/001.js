// 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.
var nums = [100, 200, 300, 400, 500];

//1. 원본 배열 손상 x
console.log(nums.slice(0, 3));

//2.
nums.pop();
nums.pop();
console.log(nums);

//3.
nums.splice(3);
console.log(nums);
