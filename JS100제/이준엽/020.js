/**
 * 공백으로 구분하여 두 숫자가 주어진다.
 * 두번째 숫자로 첫번째 숫자를 나누었을 때
 * 그 몫과 나머지를 공백으로 구분하여 출력하라.
 */

function mok(num){
  let x = num.split(' ');

  let a = parseInt(x[0]);
  let b = parseInt(x[1]);

  let mok = parseInt(a/b);
  let na = a%b;
  console.log(`${mok} ${na}`);

}

mok('10 2');