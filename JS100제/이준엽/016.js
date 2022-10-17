/**
 * 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어라.
 */

function rever(n){
  let result ='';
  for(let i=n.length-1; i >= 0; i--){
    result += n[i];

  }
  console.log(result);
}

rever('로꾸거로꾸거');