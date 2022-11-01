/*
# 문제41 : 소수판별

숫자가 주어지면 **소수인지 아닌지 판별하는 프로그램**을 작성해주세요.
소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
(소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수) => 2, 3, 5, 7, 11 등등

답:
const number = prompt('숫자를 입력해주세요');

function check_num(number) {
    if(number === 1){
        return false; // 숫자 1 제외
    }
    for(let i = 2; i<number; i++) {
        if(number % i === 0){
            return false; // 나눠떨어지면 소수가 아님
        }else{
            return true;
        }
    }
}    

console.log(check_num(number));

*/