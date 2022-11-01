/*
# 문제48 : 대소문자 바꿔서 출력하기

문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

입출력

입력 : AAABBBcccddd
출력 : aaabbbCCCDDD

답: const input = prompt('문자를 입력하세요').split('');
    for(let i in input){
        if(input[i] === input[i].toUpperCase()){
            input[i] = input[i].toLowerCase();
        }else if(input[i] === input[i].toLowerCase()){
            input[i] = input[i].toUpperCase();
        }
    }
    console.log(input.join(''));
    // for in 반복문을 통해 객체의 속성들을 반복하여 작업을 수행. for in 구문은 객체의 key 값에 접근할 수 있지만 value에는 불가능. 