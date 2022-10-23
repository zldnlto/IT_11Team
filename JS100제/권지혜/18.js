/*# 문제18 : 평균 점수

영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

공백으로 구분하여 세 과목의 점수가 주어지면 **전체 평균 점수**를 구하는 프로그램을 작성하세요. 
**단, 소숫점 자리는 모두 버립니다.**

답: const koreanSubject = prompt('국어 점수를 입력하세요');
    const mathSubject = prompt('수학 점수를 입력하세요');
    const englishSubject = prompt('영어 점수를 입력하세요');
    const averageSubject = Math.floor((parseInt(koreanSubject)+parseInt(mathSubject)+parseInt(englishSubject))/3);
    console.log(averageSubject);

    //어 이건 진짜 궁금해서 쓰는 건데 왜 Math.floor((parseInt(koreanSubject+mathSubject+englishSubject))/3)을 했을 때 결과는 왜 십만단위로 나오는지 모르겠어요ㅠ 처음에 이걸로 썼다가 십만단위로 나오길래 위처럼 바꿨거든요? 위에 답으로는 제대로 나오는데 왜죠..*/