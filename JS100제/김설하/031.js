// 다음 배열 내장함수의 시간 복잡도가 O(1)이 아닌 것을 모두 고르시오.

arr[i]; //접근, O(1)
arr.push(5); //접근, O(1)
arr.slice(); //O(n)
arr.pop(); //접근, O(1)
arr.includes(5); //O(n)

//배열의 탐색은O(n), 접근은 O(1)
//삽입이나 제거는 건드는 배열의 위치가 앞인지, 뒤인지가 중요 -> 앞 배열을 건드릴 경우 인덱스 뒷번호까지 재배치가 일어나서 시간복잡도 증가

//.sort가 O(n*logN)의 높은 시간복잡도를 가진다.
