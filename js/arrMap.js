// Map을 사용하는 이유는?
// 똑같은 크기의 배열을 만들면서 새로운 값들로 세팅하고 싶을 때
const arr = [11, 32, 7, 19, 40, 56]; 
const mapArr = arr.map(item => item + 1);
// const mapArr = arr;

console.log('arr: ', arr);
//mapArr[0] = 10;
console.log('mapArr: ', mapArr);
// deep copy
console.log('arr === mapArr: ', arr === mapArr);
/*
   == 과 === 차이
   == (동등): 타입을 자동 변환해 동등여부 판단을 한다.
   === (동일): 값과 타입이 모두 일치해야한다.
 */


// const myArr = {
//     0: 11,
//     1: 32,
//     2: 7,
//     3: 19,
//     4: 40,
//     5: 56,
//     length: 6,
//     forEach: function(cb) {
//         for (let i = 0; i < this.length; i++){
//             cb(this[i], i);
//         }
//     },
//     map: function (cb) {
//         const temp = new Array(this.length);
//         // 작업
//         for (let i = 0; i < this.length; i++){
//             temp[i] =
//         }
//         return temp;
//     }
// };
const myArr = {
    0: 11,
    1: 32,
    2: 7,
    3: 19,
    4: 40,
    5: 56,
    length: 6,
    forEach: function (cb) {
        for (let i = 0; i < this.length; i++){
            cb(this[i], i);
        }
    },
    map: function (cb) {
        for (let i = 0; i < this.length; i++) {
            temp[i] = cb(this[i], i);
        }
        return;
    }
};
const myMapArr = myArr.map(item => item + 1);
console.log('myMapArr: ', myMapArr);

