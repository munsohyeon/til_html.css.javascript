function sum(n1, n2) {
    return n1 + n2;
}

function sub(n1, n2) {
    return n1 - n2;
}

// function sum(n1, n2) {
//     console.log("결과: " + `${n1} + ${n2} = ${n1 + n2}`);
// }

// 호이스팅
const calc = (cb, n1, n2) => console.log("결과: " + cb(n1, n2));
calc(sum, 10, 20); // 콘솔에 "결과: 30"이 출력
calc(sub, 20, 12); // 콘솔에 "결과: 8"이 출력
