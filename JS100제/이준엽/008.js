/**
 * 객체의 키 이름 중복
 * 
 * var d = {
 *  'height' : 180,
 *  'weight' : 78,
 *  'weight' : 84,
 *  'temperature' : 36,
 *  'eyesight' : 1
 * };
 * 
 * console.log(d['weight']); 했을 때 출력값은?
 * 
 * 먼저나오는 78 이 아닐까?
 * 아니다. 중복되었을 때는 뒤에 입력된 값이 출력된다.
 * 
 */