// 문제26 : 행성 문제2

// 우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
// 이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

// 행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.

// 1)
let planet = prompt("행성의 한글 이름을 입력해 주세요.");
if (planet === "수성") {
  console.log("Mercury");
} else if (planet === "금성") {
  console.log("Venus");
} else if (planet === "지구") {
  console.log("Earth");
} else if (planet === "화성") {
  console.log("Mars");
} else if (planet === "목성") {
  console.log("Jupiter");
} else if (planet === "토성") {
  console.log("Saturn");
} else if (planet === "천왕성") {
  console.log("Uranus");
} else if (planet === "해왕성") {
  console.log("Neptune");
}

// 2)
const planets = {
  수성: "Mercury",
  금성: "Venus",
  지구: "Earth",
  화성: "Mars",
  목성: "Jupiter",
  토성: "Saturn",
  천왕성: "Uranus",
  해왕성: "Neptune",
};
const value = prompt("행성의 한글 이름을 입력하세요.");
console.log(planets[value]);
