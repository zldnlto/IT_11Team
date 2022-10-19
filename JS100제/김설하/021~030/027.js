// 입력
// Yujin Hyewon
// 70 100

// 출력
// {'Yujin': 70, 'Hyewon': 100}

function makeObj(names, scores) {
  let name = names.split(" ");
  let score = scores.split(" ");
  const obj = {};
  for (let i = 0; i < name.length; i++) {
    obj[name[i]] = parseInt(score[i]);
  }
  return obj;
}

makeObj("Yujin Hyejin", "70 100");
