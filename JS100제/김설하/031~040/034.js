// 민주를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자.
// (키는 공백으로 구분하여 입력됩니다.)

// 입출력

// 입력 : 176 156 155 165 166 169
// 출력 : NO

// 입력 : 155 156 165 166 169 176
// 출력 : YES

function isHeightOrder(height) {
  const ordered = height.split(" ").sort((a, b) => a - b);
  const arr = height.split(" ");
  console.log(ordered);
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (ordered[i] !== arr[i]) {
      return "NO";
    } else {
      return "YES";
    }
  }
}
//test
test1 = "176 156 155 165 166 169";
isHeightOrder(test1); //no

test2 = "155 156 165 166 169 176";
isHeightOrder(test2); //yes
