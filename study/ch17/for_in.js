console.log("for_in은 객체에 사용");
const person2 = {
  name: "김달순",
  age: 23,
  language: ["한국어", "영어", "프랑스어"],
  education: {
    school: "한국대",
    major: ["컴퓨터공항", "전자공학"],
    graduated: true,
  },
};

for (const item in person2) {
  console.log(item);
}
console.log(person2);
console.log("-------------------");
// 응용력을 활용하여 key: vlue 출력해주세요.
/*
   name: "김달순",
    age: 23,
    language: ["한국어", "영어", "프랑스어"],
    education: {
      school: "한국대",
      major: ["컴퓨터공항", "전자공학"],
      graduated: true,
    }
    */
for (const key in person2) {
  console.log(key, ":", person2[key]);
}
