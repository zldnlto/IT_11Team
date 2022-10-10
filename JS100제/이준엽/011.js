/**
 * unshift() : 맨 앞에 추가되는 배열
 */

// const cafe = ['coffee', 'cake', 'tea', 'cookie'];
// const count = cafe.unshift('bread');
// console.log(count);
// unshift()는 추가하고 난 뒤, 배열의 길이를 반환한다.

/**
 * shift()는 맨앞에 요소를 지울 때 쓰는 메서드
 * pop() 는 맨뒤 요소를 지울 때 쓰는 메서드
 */
const cafe = ['coffee', 'cake', 'tea', 'cookie']
const firstElement = cafe.shift(); 
//cafe[0]요소를 갖되, cafe 배열에서는 삭제시킴.

// const popp = cafe.pop(); // cafe[마지막요소]를 갖되 cafe배열에서는 삭제시킴.

// console.log(popp);

const cafe3 = ['coffee', 'cake', 'tea', 'cookie'];
const count3 = cafe3.push('bread');
console.log(count3);
// push()도 추가된 후에 배열의 길이를 반환한다.
// unshift()가 맨앞, push()가 맨뒤, 둘다 추가된 후 배열의 길이를 반환한다.

const 물고기 = ['광어', '참돔' , '복어', '참치', '우럭'];
물고기.splice(3)
console.log(물고기);

const cafe4 = ['coffee', 'cake', 'tea', 'cookie'];
console.log(cafe4.slice(-2, -1));
// -1까지만 짤린다.
// 끝에서 첫번째에 위치한 인덱스가 미포함된다.
// slice는 좀 더 알아봐야겠음.

const cafe5 = ['coffee', 'cake', 'tea', 'cookie'];
const 변수 = cafe5.reverse(); // 값을 복사해버리는.
변수.push('아메리카노');
console.log(변수);
console.log(cafe5);
//막쓰면 안됨.

const cafe6 = ['coffee', 'cake', 'tea', 'cookie'];
console.log(cafe6.indexOf('coffee', 2));
// indexOf() 첫번째 인자는 찾고자하는 인덱스 두번쨰 인자는 어디서 시작할지,, 없다면 -1을 반환 있으면 해당 인덱스의 위치를 반환

console.log(Array.isArray('coffee'));
console.log(Array.isArray([1,2,3]));


const cafe7 = ['coffee', 'cake', 'tea', 'cookie'];
console.log(cafe7.join(' '));

const cafe8 = ['coffee', 'cake', 'tea', 'cookie'];
cafe8.fill('www', -3,-1);
console.log(cafe8);


let arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, [10, 11]]]];
console.log(arr.flat(2));


const cafe9 = ['coffee', 'cake', 'tea', 'cookie'];
console.log(cafe.includes('cake', -2));
// 배열의 길이보다 같거나 큰 수를 입력한 경우엔, false를 반환한다.

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr2.find(i => i>10));

const arr3 = [{
  'name' : 'title1',
  'contents' : 'contents1',
  'dataNum' : 1
}, {
  'name' : 'title2',
  'contents' : 'contents2',
  'dataNum' : 2
}, {
  'name' : 'title3',
  'contents' : 'contents3',
  'dataNum' : 3
}, {
  'name' : 'title4',
  'contents' : 'contents4',
  'dataNum' : 4
}, {
  'name' : 'title5',
  'contents' : 'contents5',
  'dataNum' : 5
}];
const day = arr3.filter(i => i.dataNum > 3);
day[0]['dataNum'] = 10;
console.log(day);

const cafe10 = [{
	'item' : 'coffee',
	'amount' : 5
},{
	'item' : 'cake',
	'amount' : 4
},{
	'item' : 'tea',
	'amount' : 7
},{
	'item' : 'coo',
	'amount' : 3
}];

const index = cafe10.findIndex(obj => obj.item.length <= 3)

console.log(index);

const arr5 = [{
  'name' : 'title1',
  'contents' : 'contents1',
  'dataNum' : 1,
  'data' : [1, 2, 3]
}, {
  'name' : 'title2',
  'contents' : 'contents2',
  'dataNum' : 2,
  'data' : [1, 2, 3]
}, {
  'name' : 'title3',
  'contents' : 'contents3',
  'dataNum' : 3,
  'data' : [1, 2, 100]
}, {
  'name' : 'title4',
  'contents' : 'contents4',
  'dataNum' : 4,
  'data' : [1, 2, 3]
}, {
  'name' : 'title5',
  'contents' : 'contents5',
  'dataNum' : 5,
  'data' : [1, 2, 100]
}];
console.log(arr5.map(i => i.name));