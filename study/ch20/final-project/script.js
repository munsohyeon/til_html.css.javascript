const headerNavs = [
  { title: "얄코강좌는", link: "#about" },
  { title: "HTML", link: "#html" },
  { title: "CSS", link: "#css" },
  { title: "커리큘럼", link: "#curriculm" },
  { title: "문의하기", link: "#contact" },
];

const $headerNavUl = document.querySelector("header nav.header__nav > ul");

for (const item of headerNavs) {
  const $li = document.createElement("li");
  //$li.className = 'header__nav-item'
  $li.classList.add("header__nav-item");
  $li.innerHTML = `<a href="${item.link}">${item.title}</a>`;
  $headerNavUl.appendChild($li);
}

// about
const aboutCards = [
  {
    img: "./images/about_1.svg",
    title: "빠른 강의",
    descs: ["군더더기 없는 진행으로", "여러분의 시간을 절약합니다."],
  },
  {
    img: "./images/about_2.svg",
    title: "손쉬운 학습",
    descs: ["강의 페이지를 활용해서", "편리하게 실습할 수 있습니다."],
  },
  {
    img: "./images/about_3.svg",
    title: "플레이그라운드",
    descs: ["강의를 위해 제작한 도구가", "반복 학습을 도와줍니다."],
  },
];
const $aboutDiv = document.querySelector("#about > div.about");
aboutCards.forEach((item, idx) => {
  let desc = "";
  if (item.descs.length > 0) {
    desc = item.descs[0];
    for (let i = 1; i < item.descs.length; i++) {
      desc += `<br>${item.descs[i]}`;
    }
  }
  const $div = document.createElement("div"); // 새로운 div 생성
  $div.classList.add("about__card");
  $div.innerHTML = `
            <img class="about__icon" src="${item.img}" alt="">
            <h2 class="about__title _${idx + 1}">${item.title}</h2>
            <p class"about__text">${desc}</p>
    `;
  $aboutDiv.appendChild($div);
});

const $currLiList = document.querySelectorAll(
  "#curriculum .curriculum__list > li"
);
const $currProgBar = document.querySelector(
  "#curriculum .curriculum__progress .bar"
);

$currLiList.forEach((item, idx) => {
  item.addEventListener(
    "mouseenter",
    () => ($currProgBar.style.width = `${200 * idx}px`)
  );
  item.addEventListener("mouseleave", () => ($currProgBar.style.width = 0));
});

/*
for (let i = 0; i < aboutCards.length; i++) {
  const card = aboutCards[i];
  
  const $div = document.createElement("div"); // 새로운 div 생성
  $div.classList.add("about__card");

  const $img = document.createElement("img"); // 새로운 img 생성
  $img.classList.add("about_icon");
  $img.setAttribute("src", card.img);
  
  const $h2 = document.createElement("h2"); // 새로운 h2 생성
  $h2.classList.add("about__title");
  $h2.classList.add("_" + (i + 1));
  $h2.textContent = card.title;
  
  const $p = document.createElement("p");
  $p.classList.add("about__text");

  for (const desc of card.descs) {
    const $word = document.createElement("div");
    $word.textContent = desc;
    $p.appendChild($word);
    }
    
  $div.appendChild($img);
  $div.appendChild($h2);
  $div.appendChild($p);
  
  $aboutDiv.appendChild($div);
  }
*/

// const $contactTabs = document.querySelectorAll('#ct_1, #ct_2');//
const $contactTabs = document.querySelectorAll(
  '#contact input[name="contact"]'
);
console.log($contactTabs);
const $contactSlideCon = document.querySelector("#contact .contact__slide-con");

$contactTabs.forEach((item, idx) => {
  const marginLeft = [0, "-100vw"][idx];
  // [0,'-100vw'] : 배열을 생성
  // [idx]: 위치를 호출
  /* ^ 위에 코드 해석한거 ^
  let marginLeft2;
  if (idx === 0) {
    marginLeft2 = 0;
  } else if (idx === 1) {
    marginLeft2 = '-100vw';
  }
  */

  item.addEventListener("click", () => {
    $contactSlideCon.style.marginLeft = marginLeft;
  });
});

const $menuBtn = document.querySelector(
  "header.header button.header__menu-btn"
);
const $headerNav = document.querySelector("header.header nav.header__nav");

$menuBtn.addEventListener("click", (e) => {
  // $menuBtn.classList.toggle('on'); 이벤트가 발생후 안 없어지기 때문에 사용 x
  e.target.classList.toggle("on");
  $headerNav.classList.toggle("active");

  e.stopPropagation();
  // 버블링중지
});

const $body = document.querySelector("body");
$body.addEventListener("click", () => {
  $menuBtn.classList.remove("on");
  $headerNav.classList.remove("active");
});
