/**
 * 우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있다.
 * 이 행성들의 영어이름은, Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune이다.
 * 
 * 한글 이름을 입력하면, 영어 이름으로 반환하는 프로그램을 만들어라.
 */

function toEng(what){

  if(what === '수성'){
    console.log('Mercury');
  } else if(what === '금성'){
    console.log('Venus');
  } else if(what === '지구'){
    console.log('Earth');
  } else if(what === '화성'){
    console.log('Mars');
  } else if(what === '목성'){
    console.log('Jupiter');
  } else if(what === '토성'){
    console.log('Saturn');
  } else if(what === '천왕성'){
    console.log('Uranus');
  } else if(what === '해왕성'){
    console.log('Neptune');
  } else {
    console.log('입력한 행성이 없습니다.');
  }

}

toEng('지구');