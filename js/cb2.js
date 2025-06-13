let div = (n1, n2) => console.log(`${n1} / ${n2} = ${n1 / n2}`);
let cb = div;
cb(10, 2);
function sum(n1, n2) {
  console.log(`${n1} + ${n2} = ${n1 + n2}`);
}

// cb(호출하는게 아니라 주소값을 보내준데 호출한곳으로)
const calc = (cb, n1, n2) => cb(n1, n2);

calc(sum, 10, 20);
calc(div, 10, 2);

console.log("---------------------");

// 콜백함수(주소값만 받아서 호출할수 있다.)
// calc(여기안에는 무조건 함수만 적어야 한다.)
calc(
    (n1, n2) => {
        console.log(n1 * n2);
    },
    30,
    2
);

// calc호출하여 calc(fn, 10, 20); 더 큰수가 출력되도록 해주주쇼.
// calc(fn, 10, 20);
/*
const calc = (fn, n1, n2) => fn(n1, n2);
calc((n1, n2) => {
    if (n1 > n2) {
        console.log(n1);
        } else {
            console.log(n2);
    }
    }, 10, 20);
    */
   // calc((n1, n2) => console.log(n1 > n2 ? n1 : n2), 10, 20);
   const findMax = (n1, n2) => console.log(n1 > n2 ? n1 : n2);
   calc(findMax, 10, 20);
calc(findMax, 70, 20);

console.log("---------------------");

