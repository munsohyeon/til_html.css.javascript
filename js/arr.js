const arr = [10, 20, 30, 40, 55];
let sum = 0;
arr.forEach(function (item, idx) {
    // arr 의 length 수만큼 출력된다.
    console.log(`item: ${item}, idx:${idx}`);
});

// forEach를 이용하여 arr의 모든 값을 더한 결과값 구하라
arr.forEach( item => sum += item);
console.log("sum: " + sum);

console.log("---------------------");
// 유사배열

const myArr = {
    0: 10,
    1: 20,
    2: 30,
    3: 40,
    4: 50,
    length: 5,
    forEach: function(cb) { // forEach는 void메소드
        for (let i = 0; i < this.length; i++){
            cb(this[i]/*아이템*/, i);
        }
    }
};
console.log('my-length: ', myArr.length);
myArr.forEach(/* 여기가 콜백함수*/ (item, idx) => {
    console.log(`item: ${item}, idx:${idx}`);
});