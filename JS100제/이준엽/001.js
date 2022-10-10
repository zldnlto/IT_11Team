// 1번문제 nums 배열에서 400, 500을 삭제하는 코드 입력

var nums = [100, 200, 300, 400, 500];
nums.splice(3,2);
console.log(nums);

/**
 * splice(해당위치에서 뒤로 전부삭제)
 * splice(시작할 위치, 삭제할 개수)
 * splice(시작할 위치, 삭제할 개수, 추가할 인덱스)
 */