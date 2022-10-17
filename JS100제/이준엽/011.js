/**
 * 1부터 100까지 모두 더하는 코드를 작성해라.
 */

function plusAll(n){
  let result = 0;
  for(let i=0; i<=n; i++){
    result += i;
  }

  console.log(result);

}

plusAll(100);