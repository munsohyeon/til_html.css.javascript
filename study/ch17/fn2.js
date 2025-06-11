console.log("함수(2)");

//es5
const sum = function (n1, n2) { // 익명 함수
  console.log("함수호출!!");
  return n1 + n2;
};
console.log("return함수: ", sum(10, 20));

const copySum = sum;
const result = copySum(10, 20);
console.log('result: ', result);