// 테마파크에 온 원범이와 친구들은 놀이기구를 타려고 합니다. 모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다.

// 원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.

// 첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다.
// 그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.

// 입력
// 50
// 5
// 20
// 20
// 20
// 20
// 20

// 출력
// 2

//코드가 길어지는 걸 무서워해서 문제 풀이 시간이 길어졌었다. 일단 돌아가게 하자! 

function attraction(arr) {
    const limit = arr[0]; 
    const weights = arr.slice(2); // 몸무게 배열
    let count = 0; //인원
    let stack = 0; //배열 누적합 
    for (let i = 0; i < weights.length; i++){
        stack += weights[i];    
        count ++;
        if (stack > limit) 
        return count - 1;
    }
}

//test
let arr = [50, 5, 20, 20, 20, 20, 20];
attraction(arr); // 2