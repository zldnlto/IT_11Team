// 문제1 : 배열의 삭제
// 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.
var nums = [100, 200, 300, 400, 500];

// 답
nums.splice(3);
console.log(nums);

nums.splice(-2);
console.log(nums);

nums.pop();
nums.pop();
console.log(nums);
