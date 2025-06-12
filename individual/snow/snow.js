function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    const size = Math.random() * 20 + 10; // 10px ~ 30px
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${Math.random() * window.innerWidth}px`;
    snowflake.style.animationDuration = `${Math.random() * 5 + 3}s`; // 3s ~ 8s
    snowflake.style.setProperty("--drift", `${Math.random() * 100 - 50}px`);

    document.body.appendChild(snowflake);

    setTimeout(() => {
      snowflake.remove();
    }, 9000);
  }

  setInterval(createSnowflake, 150); // 눈 생성 간격