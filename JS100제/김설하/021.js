// 문제21 : set은 어떻게 만드나요?
// 다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

// var x1 = {1, 2, 3, 5, 6, 7}; 오류
var x2 = {}; //x 객체생성임
var x3 = new Set("javascript"); // {'j', 'a', 'v', 's', 'c', ...} size 9의 Set생성
var x4 = new Set(range(5)); // x
var x5 = new Set(); // size 0의 set 자료형 생성

//정답은 x3과 x5
