document.addEventListener("DOMContentLoaded", function () {
  const pressCount = {};

  // 定义每个数字对应的声音文件（可用 mp3 / wav）
  const soundMap = {
    "0": "sounds/0.mov",
    "1": "sounds/1.mp3",
    "2": "sounds/2.mp3",
    "3": "sounds/3.wav",
    "4": "sounds/4.mp3",
    "5": "sounds/5.wav",
    "6": "sounds/6.mp3",
    "7": "sounds/7.mp3",
    "8": "sounds/8.wav",
    "9": "sounds/9.mp3"
  };

  document.addEventListener("keydown", function(event) {
    if (/^[0-9]$/.test(event.key)) {
      const key = event.key;
      const elements = document.querySelectorAll(`.n${key}`);

      // ---- 播放声音 ----
      const soundFile = soundMap[key];
      if (soundFile) {
        const audio = new Audio(soundFile);
        audio.currentTime = 0; // 每次从头播放
        audio.play();
      }

      // ---- 放大逻辑 ----
      pressCount[key] = (pressCount[key] || 0) + 1;
      elements.forEach(el => {
        if (pressCount[key] === 1) {
          el.classList.add("big");
          el.classList.remove("bigger");
        } else if (pressCount[key] === 2) {
          el.classList.add("bigger");
        } else {
          el.classList.remove("big", "bigger");
          pressCount[key] = 0;
        }
      });
    }
  });
});