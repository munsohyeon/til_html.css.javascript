const person1 = {
    name: '김철수',
    age: 25,
    marride: false
};

console.log(typeof person1);
console.log(person1);

console.log(person1.name);
console.log(person1.age);

person1.age = 30;
console.log(person1.age);
console.log("person1['age']",person1['age']);

person1.job = 'programmer';
person1['bloodtype'] = 0;

/* 여기서 const는 상수인데 추가하거나 변경할수 있는 이유는
   person1이 상수인거지 name, age, job은 상수가 아니기 때문에..
*/

