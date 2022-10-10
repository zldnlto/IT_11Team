/**
 * 다음 변수를 활용하여 출력값을 만들어 내세요.
 * 출력값 : 2019/04/26 11:34:27
 */

var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

//내가 쓴 답
var result = year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;

console.log(result);

/**
 * 정답에는, concat() 을 쓰라고 함.
 * concat()은, 매개변수로 전달된 문자열을 메서드를 호출한 문자열에 붙여 새로운 문자열로 변환한다고 함.
 * 
 * year.concat('/',month,'/',day,' ',hour,':',minute,':',second);
 */