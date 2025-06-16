// 배열의 여러값을 하나의 값으로 변경할 때 사용
// 주로 모든 값 더하기 할 때 사용
const arr = [11, 32, 7, 19, 40, 56];
const result = arr.reduce((prev, next) => {
  // 인자(파라미터) 1개 보냄
  // prev는 이전값, next는 다음 값 (다만 첫번째는 이전값이 없기때문에 0번방 값이 들어옴)
  console.log("prev: ", prev, "next: ", next);
  return prev + next; // 리턴되어 이전값과 다음값이 더해져서 다음 이전값으로 들어감
});
console.log("result: " + result);
console.log("----------------------------");

const result2 = arr.reduce((prev, next) => {
  // 인자(파라미터) 1개 보냄
  // prev는 이전값, next는 다음 값 (다만 첫번째는 이전값이 없기때문에 0번방 값이 들어옴)
  console.log("prev: ", prev, "next: ", next);
  return prev + next; // 리턴되어 이전값과 다음값이 더해져서 다음 이전값으로 들어감
}, 0);
console.log("result2: " + result2);
