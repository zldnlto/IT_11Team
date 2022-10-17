//2-gram 출력

function make2gram(str) {
  for (let i = 0; i < str.length - 1; i++) {
    console.log(str[i], str[i + 1]);
  }
}

//test

make2gram("Javascript");
