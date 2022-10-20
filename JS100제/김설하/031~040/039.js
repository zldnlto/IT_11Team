// 문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.
// 입력 : querty
// 출력 : euerty

// 입력 : hqllo my namq is hyqwon
// 출력 : hello my name is hyewon

function changeQToE(str) {
    return str.replace(/q/g,"e");
}


var heywon = "hqllo my namq is hyqwon"; 
var querty = "querty";
changeQToE(hyewon); //hello my name is hyewon
changeQToE(querty);

//.replace를 사용한 공백 제거 a.replace(/ /g,"")
