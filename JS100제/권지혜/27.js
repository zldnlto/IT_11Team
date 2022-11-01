/*# 문제27 : 객체 만들기

첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

두 개를 합쳐 **학생의 이름이 key**이고 **value가 수학 점수**인 객체를 출력해주세요.
입력
Yujin Hyewon
70 100

출력
{'Yujin': 70, 'Hyewon': 100}

답: const keys = prompt("이름을 입력하시오.").split(" ");
    const values = prompt("수학점수를 입력하시오.").split(" ");
    let obj = {};
    for(let i = 0; i<keys.length; i++){
        obj[keys[i]] = values[i];
    }

    console.log(obj);

//이건 for문을 어떻게 설정해야할지 감이 안잡혀서 인프런 강의를 보고 다시 풀었습니다. 
*/
