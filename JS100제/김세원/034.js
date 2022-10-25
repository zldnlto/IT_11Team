// 입출력

// 입력 : 176 156 155 165 166 169
// 출력 : NO

// 입력 : 155 156 165 166 169 176
// 출력 : YES

const num = prompt('number')
const arr = num.split(' ').sort((a, b) => a - b);

const val1 = String(num.split(' '))
const val2 = String(arr)
if(val1 == val2){
  console.log('yse');
}else{
  console.log('no');
}