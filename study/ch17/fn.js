console.log("함수");

//es5 문법
// 메소드를 구성하는 4가지 요소: 리턴타입, 메소드명, 파라미터(매개변수), 구현부

// 자바스크립트 함수/메소드를 구성하는 가지 요소: 메소드명, 파라미터(매개변수), 구현부 (중괄호 부분{})
// JS에서는 gkatneh 1급 객체이다. 즉, 함수명에 함수 객체 주소값이 저장된다.
// JS에서 함수 호출은 함수 조소값 소괄호이다.
function sum(n1, n2) {
  console.log("sum메소드 호출!!");
  console.log(`${n1} + ${n2} = ${n1 + n2}`);
}

sum(1, 2);

const copySum = sum;
copySum(1, 2);

console.log('sum === copySum', sum === copySum);