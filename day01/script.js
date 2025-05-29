const $screen = document.querySelector("#screen");
const $toggleButton = document.querySelector("#button");
let timeInterval;
let stopWatchOn = false;
let seconds = 0;

console.log("screen", $screen);
console.log("toggleButton", $toggleButton);

if ($screen && $toggleButton) {
  // 첫번째 아규먼트(인자): 문자열(이벤트 이름)
  // 두번째 아규먼트(인자): 함수 주소값 >> 콜백함수
  function clickBtn() {
    alert("하하");
  }

  const cb = clickBtn;
  $toggleButton.addEventListener("click", () => {
    stopWatchOn = !stopWatchOn;
    //console.log("stopWatchOn:", stopWatchOn);
    // 호출일때는 = 을 못쓰기 때문에 속성이다. ↓↓↓
    $toggleButton.innerHTML = stopWatchOn ? "■" : "▶";
    //$toggleButton.computedStyleMap.backgroundColor = stopWatchOn ? "tomato": "steelblue";
    $toggleButton.classList.toggle("stop-color");
    if (stopWatchOn) {
      // 첫번째 인자 : 콜백함수
      // 두번째 인자 : Number - ms(millisecond 1chsms 1000ms)
      timeInterval = setInterval(() => {
        // setInterval 일정시간 반복하는거 settimeout은 한번만 반복
        seconds++;
        const mm = String(Math.floor(seconds / 6000) % 60).padStart(2, "0");
        const ss = String(Math.floor(seconds / 100) % 60).padStart(2, "0");
        const cs = String(seconds % 100).padStart(2, "0");
        $screen.innerText = `${mm}:${ss}:${cs}`;
      }, 10);
    } else {
      clearInterval(timeInterval);
      seconds = 0;
      //$screen.innerHTML = "00:00:00";
    }
  });
}
