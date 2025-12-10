



// ====== 三血条系统 ======
let gameStarted = false;
let monsterLife = 100;     
let triangleLife = 100;    
let humanLife = 0;
let triangleFlash = 0;  
let mistakeCount = 0;          

let activeFlyChars = [];   // 当前从下往上飞的字（你原来的）
let rainChars = [];        // 从上往下掉的“坏字”
let rainCharPool = [];   
let rainStarted = false;
// ====== 显示模块 ======
const ageInput  = document.querySelector(".agetext");
const textbox   = document.getElementById("dialog");
const agehold   = document.querySelector(".agehold");
const nameBtn   = document.querySelector(".nameBtn");
const ageback   = document.querySelector(".ageback");
const flyBtn    = document.getElementById("flywordstart");
const backcolor = document.querySelector(".thebackgroundcolor");
const flyContainer = document.getElementById("flyContainer");
const die100 = document.querySelector(".die100");
die100.style.display = "none"; 
const refresh = document.querySelector(".refresh");
refresh.style.display = "none"; 
const diedictionary = document.querySelector(".diedictionary");
diedictionary.style.display = "none"; 
const ko = document.querySelector(".ko");
const norain = document.querySelector(".norain");
const humanmonster = document.querySelector(".humanmonster");
humanmonster.style.display = "none"; 
// --- Monster ---
const monsterBox = document.createElement("div");
monsterBox.style.position = "fixed";
monsterBox.style.top = "15px";
monsterBox.style.left = "50%";
monsterBox.style.transform = "translateX(-50%)";
monsterBox.style.zIndex = "3000";
monsterBox.style.color = "white";
monsterBox.style.fontFamily = "Times New Roman";
monsterBox.style.fontSize = "18px";
monsterBox.textContent = "Monster: " + monsterLife.toFixed(1);
monsterBox.style.display = "none";
document.body.appendChild(monsterBox);

const monsterBarContainer = document.createElement("div");
monsterBarContainer.style.position = "fixed";
monsterBarContainer.style.top = "35px";
monsterBarContainer.style.left = "50%";
monsterBarContainer.style.transform = "translateX(-50%)";
monsterBarContainer.style.width = "700px";
monsterBarContainer.style.height = "10px";
monsterBarContainer.style.border = "1px solid white";
monsterBarContainer.style.borderRadius = "10px";
monsterBarContainer.style.zIndex = "2999";
monsterBarContainer.style.display = "none";
document.body.appendChild(monsterBarContainer);

const monsterBarFill = document.createElement("div");
monsterBarFill.style.height = "100%";
monsterBarFill.style.width = "100%";
monsterBarFill.style.background = "black";
monsterBarFill.style.borderRadius = "10px";
monsterBarContainer.appendChild(monsterBarFill);

// --- Triangle (pet) ---
const triangleBox = document.createElement("div");
triangleBox.style.position = "fixed";
triangleBox.style.top = "60px";
triangleBox.style.left = "50%";
triangleBox.style.opacity = "1";
triangleBox.style.transform = "translateX(-50%)";
triangleBox.style.zIndex = "3000";
triangleBox.style.color = "white";
triangleBox.style.fontFamily = "Times New Roman";
triangleBox.style.fontSize = "16px";
triangleBox.textContent = "Triangle: " + triangleLife.toFixed(1);
triangleBox.style.display = "none";
document.body.appendChild(triangleBox);

const triangleBarContainer = document.createElement("div");
triangleBarContainer.style.position = "fixed";
triangleBarContainer.style.top = "80px";
triangleBarContainer.style.left = "50%";
triangleBarContainer.style.opacity = "1";
triangleBarContainer.style.transform = "translateX(-50%)";
triangleBarContainer.style.width = "500px";
triangleBarContainer.style.height = "8px";
triangleBarContainer.style.border = "1px solid white";
triangleBarContainer.style.borderRadius = "10px";
triangleBarContainer.style.zIndex = "2999";
triangleBarContainer.style.display = "none";
document.body.appendChild(triangleBarContainer);

const triangleBarFill = document.createElement("div");
triangleBarFill.style.height = "100%";
triangleBarFill.style.width = "100%";
triangleBarFill.style.opacity = "1";
triangleBarFill.style.background = "white";
triangleBarFill.style.borderRadius = "10px";
triangleBarContainer.appendChild(triangleBarFill);

// --- Human ---
const humanBox = document.createElement("div");
humanBox.style.position = "fixed";
humanBox.style.top = "105px";
humanBox.style.left = "50%";
humanBox.style.transform = "translateX(-50%)";
humanBox.style.zIndex = "3000";
humanBox.style.color = "white";
humanBox.style.opacity = "1";
humanBox.style.fontFamily = "Times New Roman";
humanBox.style.fontSize = "16px";
humanBox.textContent = "Human: " + humanLife.toFixed(1);
humanBox.style.display = "none";
document.body.appendChild(humanBox);

const humanBarContainer = document.createElement("div");
humanBarContainer.style.position = "fixed";
humanBarContainer.style.top = "125px";
humanBarContainer.style.left = "50%";
humanBarContainer.style.transform = "translateX(-50%)";
humanBarContainer.style.width = "500px";
humanBarContainer.style.height = "8px";
humanBarContainer.style.border = "1px solid white";
humanBarContainer.style.borderRadius = "10px";
humanBarContainer.style.zIndex = "2999";
humanBarContainer.style.display = "none";
humanBarContainer.style.opacity = "01";
document.body.appendChild(humanBarContainer);

const humanBarFill = document.createElement("div");
humanBarFill.style.height = "100%";
humanBarFill.style.width = "1%";
humanBarFill.style.background = "yellow";
humanBarFill.style.borderRadius = "10px";
humanBarFill.style.opacity = "1";
humanBarContainer.appendChild(humanBarFill);


// --- Super Bar (monster + human) ---
const superBox = document.createElement("div");
superBox.style.position = "fixed";
superBox.style.bottom = "60px";
superBox.style.left = "50%";
superBox.style.transform = "translateX(-50%)";
superBox.style.zIndex = "3000";
superBox.style.color = "white";
superBox.style.fontFamily = "Times New Roman";
superBox.style.fontSize = "18px";
superBox.textContent = "Our Life: 0";
superBox.style.display = "none";
document.body.appendChild(superBox);

const superBarContainer = document.createElement("div");
superBarContainer.style.position = "fixed";
superBarContainer.style.bottom = "40px";
superBarContainer.style.left = "50%";
superBarContainer.style.transform = "translateX(-50%)";
superBarContainer.style.width = "700px";
superBarContainer.style.height = "10px";
superBarContainer.style.border = "1px solid black";
superBarContainer.style.borderRadius = "10px";
superBarContainer.style.zIndex = "2999";
superBarContainer.style.display = "none";
document.body.appendChild(superBarContainer);

const superBarFill = document.createElement("div");
superBarFill.style.height = "100%";
superBarFill.style.width = "0%";
superBarFill.style.background = "white";
superBarFill.style.borderRadius = "10px";
superBarContainer.appendChild(superBarFill);


// ====== 更新全部血条 ======
function updateStatus() {


   let superValue = triangleLife + humanLife;
  superValue = Math.max(superValue, 0);

  superBox.textContent = "Our Life: " + superValue.toFixed(1);

  // 假设最大值 200（monster100 + human100）
  let percent = Math.min(superValue / 200 * 100, 100);
  superBarFill.style.width = percent + "%";




  monsterLife = Math.max(monsterLife, 0);
  triangleLife = Math.max(triangleLife, 0);

  monsterBox.textContent  = "Monster: "  + monsterLife.toFixed(1);
  triangleBox.textContent = "Triangle: " + triangleLife.toFixed(1);
  humanBox.textContent    = "Human: "    + humanLife.toFixed(1);

  monsterBarFill.style.width  = monsterLife + "%";
  triangleBarFill.style.width = triangleLife + "%";
  humanBarFill.style.width    = Math.min(humanLife, 100) + "%";


    // ❗ Human 死亡逻辑
    if (gameStarted){
  if (humanLife <= 0) {
    humanLife = 0;
    flying = false;
    rainStarted = false;

    // 隐藏血条
    monsterBox.style.display = "none";
    monsterBarContainer.style.display = "none";
    triangleBox.style.display = "none";
    triangleBarContainer.style.display = "none";
    humanBox.style.display = "none";
    humanBarContainer.style.display = "none";
    superBox.style.display = "none";
    superBarContainer.style.display = "none";

    // 🎯 Human=0 → 根据 Triangle 生命判断结局
   if (monsterLife > 10){
    if (triangleLife > 10) {
      // 结局1
      const trianglemonster = document.querySelector(".trianglemonster");
      trianglemonster.style.display = "block";
      backcolor.style.display = "block";
      refresh.style.display = "block";
    } else if (triangleLife <= 10) {
      // 结局2
      const monster = document.querySelector(".monster");
      monster.style.display = "block";
      backcolor.style.display = "block";
      refresh.style.display = "block";
    }

    refresh.style.display = "block";
    return;
  } else{
    if (triangleLife > 50){
      const triangle = document.querySelector(".triangle");
      triangle.style.display = "block";  
      refresh.style.display = "block";
    } else{
      const trianglemonster = document.querySelector(".trianglemonster");
      trianglemonster.style.display = "block";
      backcolor.style.display = "block";
      refresh.style.display = "block";
    }
  }
}
    }


  // ❗ 怪物死了
  if (monsterLife <= 0) {
      monsterLife = 0;
    flying = false;
    rainStarted = false;

    // 结束时隐藏血条
    monsterBox.style.display = "none";
    monsterBarContainer.style.display = "none";
    triangleBox.style.display = "none";
    triangleBarContainer.style.display = "none";
    humanBox.style.display = "none";
    humanBarContainer.style.display = "none";
    superBox.style.display = "none";
    superBarContainer.style.display = "none";

    // 🎯 分两种结局
    if (mistakeCount >= 20) {
        // ❌ 坏结局 1
        const human = document.querySelector(".human");
       human.style.display = "block";
       refresh.style.display = "block";
    } else {
      
      const humantriangle = document.querySelector(".humantriangle");
       hhumantriangleuman.style.display = "block";
       refresh.style.display = "block";
    }

    refresh.style.display = "block"; // 显示 Retry 按钮
    return;
}






  
  // ❗ 宠物死了
  // ❗ Triangle 生命值检查
if (triangleLife <= 0) {

  if (humanLife > 50) {

    // 人类消耗 10，Triangle 获得 10
    humanLife -= 10;
    triangleLife = 10;
        showLifeSplitPopup();
  // 立刻更新画面
    triangleBox.textContent = "Triangle: " + triangleLife.toFixed(1);
    triangleBarFill.style.width = triangleLife + "%";

    humanBox.textContent = "Human: " + humanLife.toFixed(1);
    humanBarFill.style.width = Math.min(humanLife, 100) + "%";

  } else {

    // Human 无力救援 → 游戏结束
    flying = false;
    humanmonster.style.display = "block";
    refresh.style.display = "block";
    backcolor.style.display = "block";

    // 如果你有 KO 屏幕可以在这里触发：
    // ko.style.display = "block";
    // refresh.style.display = "block";
  }
}
}












let allowedChars = [];   // 允许飞的字符（从名字里筛出来）
let flying = false;      // 是否正在飞字

let generatepetform = false;
let petform = [];



function setAllowedCharsFromName() {
  const name = ageInput.value || "";
  allowedChars = name.split("").filter(ch => /[A-Za-z0-9]/.test(ch));
  console.log("allowedChars:", allowedChars);
}



nameBtn.addEventListener("click", () => {
  let nameValue = ageInput.value.trim();
  ageback.style.display = "none";
  skipBtn.style.display = "block";
  textbox.style.display = "none";
  playScreen.style.display = "block";
  playNextBtn.style.display = "block";

  
  if (nameValue.length === 0) {
    ko.style.display = "block";  
    refresh.style.display = "block"; 
    backcolor.style.display = "block" ;
    ageInput.style.display = "none";
    return;
  }
 


  if (!/^[A-Za-z0-9  ]+$/.test(nameValue)) {
    diedictionary.style.display = "block";  
    refresh.style.display = "block"; 
    backcolor.style.display = "block" ;
    ageInput.style.display = "none";
    return;
  }
 else {
  diedictionary.style.display = "none";  
  refresh.style.display = "none";    
}
  
  if (nameValue.length >= 100) {
    die100.style.display = "block";  
    refresh.style.display = "block"; 
    backcolor.style.display = "block" ;
    ageInput.style.display = "none";
    return;
  }
  else {
  die100.style.display = "none";  
  refresh.style.display = "none";    
}


  humanLife = 100 - nameValue.length;
  if (humanLife < 0) humanLife = 0;
triangleLife = nameValue.length;
  ageback.classList.add("agegone");



updateStatus();


  
  setAllowedCharsFromName();





  
//pet
  petform = [];

  for (let i = 0; i < nameValue.length; i++) {
    let chara = nameValue[i];
    let x, y;

    if (i === 0) {
      // 第一段身体
      x = 0;
      y = 50;
    } else {
      // 连接到上一块
      let prev = petform[i - 1];
      x = prev.x + ((Math.random() - 0.5) * 150);
      y = prev.y + ((Math.random() - 0.5) * 150);
    }

    petform.push({
      char: chara,
      x: x,
      y: y,
      size: Math.random() * 60 + 40,
      rotateAngle: Math.random() * 360,   // drawScene() 正在用
      colorR: Math.random() * 155 + 100,
      colorG: Math.random() * 155 + 100,
      colorB: Math.random() * 155 + 100
    });
  }

  console.log("petform =", petform);
  generatepetform = true;







  // 🔹 构建“名字里没有的字符池” A-Z + 0-9
  let allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  rainCharPool = allChars
    .split("")
    .filter(c => !nameValue.toUpperCase().includes(c));

 
 


  if (allowedChars.length > 0) {
      flyBtn.style.display = "none";
    startPlayDialogue();
  } else {
    flyBtn.style.display = "none";
    norain.style.display = "block";
  }
});

flyBtn.addEventListener("click", () => {
  gameStarted = true;
    monsterBox.style.display = "block";
monsterBarContainer.style.display = "block";

triangleBox.style.display = "block";
triangleBarContainer.style.display = "block";

humanBox.style.display = "block";
humanBarContainer.style.display = "block";


superBox.style.display = "block";
superBarContainer.style.display = "block";
  flyBtn.style.display = "none";
  if (!allowedChars.length) return;
   if (!flying) {
    rainStarted = true;
    setTimeout(showRainWarning, 17000);
    setTimeout(spawnRainGroup, 20000); // 20 秒后开始第一次雨
  }

  flying = true;
  spawnFlyChar();
});








//白黑色字符好
function spawnFlyChar() {
  if (!flying) return;

  const ch = allowedChars[Math.floor(Math.random() * allowedChars.length)];

  const el = document.createElement("div");
  el.className = "flyChar";
  el.textContent = ch;

  // 随机大小
  const size = Math.random() * 24 + 20;
  el.style.fontSize = size + "px";


  const offsetX = Math.random() * windowWidth - windowWidth/2;
  el.style.left = `calc(50% + ${offsetX}px)`;
  el.style.bottom = "0px";
  flyContainer.appendChild(el);

 triangleLife -= 0.3;
 
updateStatus();

  // 为这个飞字建立一个对象，方便追踪
  const obj = {
    el: el,
    char: ch,
    caught: false,   
    resolved: false  
  };
  activeFlyChars.push(obj);

  let y = 0;
  let speed = 2;

  function animate() {
    // 如果已经被救或已结算，直接结束
    if (obj.resolved) return;

    // 如果被“打中”了（在 keydown 里会设置）
    if (obj.caught) {
      obj.resolved = true;
      el.remove();
      // 从数组里移除这个对象
      activeFlyChars = activeFlyChars.filter(o => o !== obj);
      return;
    }

    y += speed;
    el.style.transform = `translateY(-${y}px)`;

    const rect = el.getBoundingClientRect();
    if (rect.top <= 10) {  
      obj.resolved = true;
      el.remove();
      activeFlyChars = activeFlyChars.filter(o => o !== obj);

       monsterLife += 0.5;
       //humanLife -= 1;
  updateStatus();
      return;
    }

    requestAnimationFrame(animate);
  }

  animate();

  // 每隔 400ms 生成一个新字
  setTimeout(spawnFlyChar, 400);
}









//彩色字符坏

// 每 20 秒下“一群字”
function spawnRainGroup() {
  if (!rainCharPool.length) return;

  const groupSize = 6; // 一次掉 10 个字，你可以改大/改小

  for (let i = 0; i < groupSize; i++) {
    setTimeout(() => {
      spawnRainCharDown();
    }, i * 200);
  }
  scheduleNextRain

  

 
}
 function scheduleNextRain() {
  setTimeout(showRainWarning, 27000);
  setTimeout(spawnRainGroup, 30000);
}
// 生成一个从上往下掉的彩色坏字
function spawnRainCharDown() {
  if (!rainCharPool.length) return;

  const ch = rainCharPool[Math.floor(Math.random() * rainCharPool.length)];

  const el = document.createElement("div");
  el.className = "rainChar";    


  const hue = Math.floor(Math.random() * 360);
  el.style.color = `hsl(${hue}, 80%, 60%)`;

  el.textContent = ch;

  
  const size = Math.random() * 40 + 20;
  el.style.fontSize = size + "px";

  // 固定定位：从屏幕上方某个随机 x 掉下来
  el.style.position = "fixed";
  el.style.top = "-40px";
  el.style.left = Math.random() * window.innerWidth + "px";
  el.style.pointerEvents = "none";

  document.body.appendChild(el);

  // 💔 每出现一个坏字：monster -1
  monsterLife -= 1;
  updateStatus();

  const obj = {
    el: el,
    char: ch,
    caught: false,
    resolved: false
  };
  rainChars.push(obj);

  const startTime = performance.now();
  const duration = 5000;              // 3 秒飞完整个屏幕
  const endY = window.innerHeight+40; // 掉出屏幕

  function step(now) {
    if (obj.resolved) return;

    const tNorm = (now - startTime) / duration;

    if (tNorm >= 1) {
      // 到底了，还没被打中 → 惩罚 human & triangle
      obj.resolved = true;
      if (!obj.caught) {
        humanLife -= 2;
        triangleLife -= 2;
        triangleFlash = 1;
        updateStatus();
      }
      el.remove();
      rainChars = rainChars.filter(o => o !== obj);
      return;
    }

    const y = -40 + tNorm * (endY + 40);
    el.style.top = y + "px";

    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}








window.addEventListener("keydown", (e) => {
  currentHumanIndex = Math.floor(Math.random() * 3);
  humanBounce = 0.3;

  const key = e.key;
  if (!key || key.length !== 1) return;

  // ⭐ 先判断雨字
  const rainTarget = rainChars.find(obj =>
    !obj.resolved &&
    !obj.caught &&
    obj.char.toLowerCase() === key.toLowerCase()
  );

 if (rainTarget) {
  rainTarget.caught = true;

  // 🔥 从 DOM 删除
  rainTarget.el.remove();

  // 🔥 从数组移除
  rainChars = rainChars.filter(o => o !== rainTarget);

  // 🔥 加血逻辑
  humanLife += 1;
  triangleLife += 1;

  updateStatus();
  return; // 重要：阻止后续飞字判断
}

  // ⭐ 再判断飞字
  const target = activeFlyChars.find(obj =>
    !obj.resolved &&
    !obj.caught &&
    obj.char.toLowerCase() === key.toLowerCase()
  );

  if (target) {
    target.caught = true;
    monsterLife -= 1;
    humanLife += 0.3;
    updateStatus();
    return;
  }

  // ❌ 两边都没 hit
  triangleLife += 0.5;
  mistakeCount++;
  humanLife -= 1;
  triangleFlash = 1;
  updateStatus();
});

function showRainWarning() {
  const warn = document.getElementById("rainWarning");
  warn.style.display = "block";

  // 3 秒后自动消失
  setTimeout(() => {
    warn.style.display = "none";
  }, 3000);
}






ageInput.addEventListener("input", () => {
  ageInput.style.height = "auto";
  ageInput.style.height = ageInput.scrollHeight + "px";
});
 



let name = ageInput.value;
let clickCount = 0;
let lines = [
  " ",
  "Hel...",
  "Hello...",
  "Welcome to this world, it's of partnership and friendship.",
  "to surpass the danger in face, I need you to tell me your full name", 
  "or youknow, name yourself IN ENGLISH because I'm illiterate.",
];
let index = 0;

textbox.textContent = lines[index];
textbox.style.opacity = 1;
window.onclick = () => {
  clickCount++;


 if (clickCount >= 6) {
  agehold.style.opacity = 1;
  agehold.classList.add("show");
  window.onclick = null;
  return;
}


  index++;
  if (index < lines.length) {
    textbox.style.opacity = 0;
    setTimeout(() => {
      textbox.textContent = lines[index];
      textbox.style.opacity = 1;
    }, 200);
  } else {
    textbox.style.opacity = 0;
  }
};








// === 新的 Play Dialogue 系统 ===
const playScreen = document.getElementById("playScreen");
const playText   = document.getElementById("playText");
const playNextBtn = document.getElementById("playNextBtn");

let playDialogue = [
   "Ok! now you, my pet, have become the mixture of cute black trangles appearing on my left",
  "And I have yet sacrafised part of myself to form you",
  "So now you have to fight for me against that big... colorful sky",
  "Your mission is to click on your keyboards when letters apear",
  "If you see letters flying up — strike them.",
  "If you see letters falling — strike harder.",
  "If you miss any letter then the colorful sky thing will gain life!! VERY BAD!!!",
  "If you missclick any letter then I...",
  "..no, WE will get hurt.",
  "Here, reaching 0 dosen't means the end for me and you, sometimes the story ends half way when sometimes the story never ends",
  "Now, prepare yourself...",
  "You'd better kick the ass out of that sky or the consequences are those you can't withstand."
];

let playIndex = 0;

function startPlayDialogue() {
  playScreen.style.display = "block";
  playIndex = 0;
  playText.textContent = playDialogue[playIndex];
}

playNextBtn.addEventListener("click", () => {
  playIndex++;

  if (playIndex >= playDialogue.length) {
    // 对话结束 → 关闭界面，显示 flyBtn
    playScreen.style.display = "none";
    flyBtn.style.display = "block";
    return;
  }

  playText.textContent = playDialogue[playIndex];
});



const skipBtn = document.getElementById("skipBtn");

skipBtn.addEventListener("click", () => {
  skipBtn.style.display = "none";
  playScreen.style.display = "none";
 flyBtn.style.display = "block";
  playIndex = playDialogue.length;
});

function showLifeSplitPopup() {
  const pop = document.getElementById("lifeSplitPopup");
  pop.classList.add("show");

  // 1.5 秒后消失
  setTimeout(() => {
    pop.classList.remove("show");
  }, 1500);
}








//p5js from now onnnnnnnnn!!!!!!!!!!!






let camSide, camBottom;
let t = 0;
let humanBounce = 0;
let humanImgs = [];        // 存三张 human 图
let currentHumanIndex = 0; 
let nebulaShader;
let angle = 0;
let input;
let texts = [];




function preload() {
   
  

 humanImgs[0] = loadImage('man.png');
  humanImgs[1] = loadImage('man1.png');
  humanImgs[2] = loadImage('man2.png');
  
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  pixelDensity(1);
   textFont('Courier New', 10);

  camSide = createCamera();
  camBottom = createCamera();
  input = createInput("");

  textFont('monospace');
  textSize(32);

  input.addClass("inputBox");
  input.attribute("placeholder", "type here...");
  input1 = createInput("");
  input1.addClass("inputBox1");
  input1.attribute("placeholder", "type here...");
   input.elt.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      texts.push(input.value()); 
      input.value("");           
    }
  });



  input1 = createInput("");
  input1.addClass("inputBox1");
  input1.attribute("placeholder", "type here...");
}

 const startBtn = document.getElementById("startBtn");
  const startScreen = document.getElementById("startScreen");
  const inputBox = document.getElementById("input");
  const inputBox1 = document.getElementById("input1");

  startBtn.addEventListener("click", () => {
    startScreen.style.display = "none"; 
    inputBox.style.display = "block"; 
    backcolor.style.display = "none"; 
    inputBox1.style.display = "block";   
 });







function cloudSphere(radius = 300, detail = 100, time = 0) {
  push();
  rotateY(time * 3);
  rotateX(time * 1.5);

  noStroke();
  beginShape(TRIANGLE_STRIP);

  
  let hueShift = (time * 20) % 360;  

  for (let i = 0; i <= detail; i++) {
    let lat0 = map(i, 0, detail, -90, 90);
    let lat1 = map(i + 1, 0, detail, -90, 90);

    for (let j = 0; j <= detail * 2; j++) {
      let lon = map(j, 0, detail * 2, -180, 180);

      for (let k = 0; k < 2; k++) {
        let lat = (k === 0) ? lat0 : lat1;

        let x = radius * cos(lat) * cos(lon);
        let y = radius * sin(lat);
        let z = radius * cos(lat) * sin(lon);

        let u = map(lon, -180, 180, 0, 3);
        let v = map(lat, -90, 90, 0, 3);

        let n =
          0.6 * noise(u + time * 0.1, v + time * 0.15) +
          0.3 * noise(u * 2 - time * 0.05, v * 2 + time * 0.1) +
          0.1 * noise(u * 4 + time * 0.2, v * 4 - time * 0.1);

          n += 0.35 * noise(u * 8 + time * 0.3, v * 8 - time * 0.25);

        n = pow(n, 2.5);

        // 随机彩色版本：使用 HSB 模式会更方便
        let c1 = noise(u * 1.2 + time * 0.4, v * 1.3 - time * 0.3);
let c2 = noise(u * 0.8 - time * 0.6, v * 1.5 + time * 0.2);
let c3 = noise(u * 3.0 + time * 0.8, v * 0.7 - time * 0.4);
let c4 = noise(u * 1.8 - time * 0.3, v * 2.3 + time * 0.6);
let c5 = noise(u * 4.0 + time * 0.9, v * 3.0 - time * 0.7);
let c6 = noise(u * 0.5 + time * 1.2, v * 0.5 + time * 1.3);

// 更强的对比
c1 = pow(c1, 2.0);
c2 = pow(c2, 9.8);
c3 = pow(c3, 10.5);
c4 = pow(c4, 1.6);
c5 = pow(c5, 8.0);
c6 = pow(c6, 2.2);

// 多层噪声混合 hue（更丰富更戏剧化）
let hueVal = (
  c1 * 120 +   // 蓝绿
  c2 * 100 +   // 红黄
  c3 * 220 +   // 紫色
  c4 * 160 +   
  c5 * 300 + 
  c6 * 360 +   // 加强随机高频
  time * 120   // 加快整体色相旋转
) % 360;

// 更多变化速度
let satVal = 60 + (c2 + c5) * 90;
let briVal = 65 + (c3 + c6) * 95;




// 输出颜色 (HSB)
colorMode(HSB, 360, 100, 100, 255);
fill(hueVal, satVal, briVal, 220);

        vertex(x, y, z);
      }
    }
  }

  endShape();
  pop();

  colorMode(RGB, 255); // 记得恢复回RGB
}






function drawFiveSidedBox(x, y, z, w, h, d) {
  push();
  translate(x, y, z);
  ambientMaterial(200); // 保持原来的材质
  stroke(255);
  strokeWeight(1);

  // 底面
  beginShape();
  vertex(-w/2, h/2, -d/2);
  vertex(w/2, h/2, -d/2);
  vertex(w/2, h/2, d/2);
  vertex(-w/2, h/2, d/2);
  endShape(CLOSE);

  // 前面
  beginShape();
  vertex(-w/2, h/2, -d/2);
  vertex(w/2, h/2, -d/2);
  vertex(w/2, -h/2, -d/2);
  vertex(-w/2, -h/2, -d/2);
  endShape(CLOSE);

  // 后面
  beginShape();
  vertex(-w/2, h/2, d/2);
  vertex(w/2, h/2, d/2);
  vertex(w/2, -h/2, d/2);
  vertex(-w/2, -h/2, d/2);
  endShape(CLOSE);

  // 左面
  beginShape();
  vertex(-w/2, h/2, -d/2);
  vertex(-w/2, h/2, d/2);
  vertex(-w/2, -h/2, d/2);
  vertex(-w/2, -h/2, -d/2);
  endShape(CLOSE);

  // 右面
  beginShape();
  vertex(w/2, h/2, -d/2);
  vertex(w/2, h/2, d/2);
  vertex(w/2, -h/2, d/2);
  vertex(w/2, -h/2, -d/2);
  endShape(CLOSE);

  pop();
}






function draw() {
  console.log("drawScene running!");
  
  const gl = this._renderer.GL;
  gl.enable(gl.SCISSOR_TEST);

  //left one
  gl.scissor(0, 0, width / 2, height);
  gl.viewport(0, 0, width / 2, height);
 
  background(230);

  let aspectLeft = (width / 2) / height;
  camSide.perspective(60, aspectLeft, 1, 5000);

  //left cam
  setCamera(camSide);
  camSide.setPosition(800, -300, 0);
  camSide.lookAt(-100, -250, 0);
  drawScene();

  // right one
  gl.scissor(width / 2, 0, width / 2, height);
  gl.viewport(width / 2, 0, width / 2, height);
 
  background(100);

  let aspectRight = (width / 2) / height;
  camBottom.perspective(60, aspectRight, 1, 5000);
//right cam
  setCamera(camBottom);
  camBottom.setPosition(100, 0, 0);
  camBottom.lookAt(800, -200, 0);
  drawScene();

  gl.disable(gl.SCISSOR_TEST);
}





function drawScene() {

  orbitControl(4, 4, 0.5, 9999, 9999);
  
let r = noise(t + 20) * 255;
  let g = noise(t + 200) * 255;
  let b = noise(t + 180) * 255;

  

  
  
  

 //那两个type here 
  push();
translate(-100, 0, 130); 
rotateX(-30);            
rotateY(0);

fill(255);
textSize(32);
textAlign(CENTER, CENTER);
for (let i = 0; i < texts.length; i++) {
  text(texts[i], 0, i * 40); 
}
pop();


  //ball
  push();
  
  noStroke();
  
  cloudSphere(4000, 30, t);
  rotateY(200);
  

  pop();

  //rain prototype
 //push();
// noFill();
// noStroke();
//translate(1000, -100, 0);
//blendMode(BLEND);
//drawingContext.enable(drawingContext.BLEND);
//texture(humanImg);
//rotateY(90)
//box(200,200);
//pop();


  //room
  push();
  ambientLight(100);

directionalLight(r, r, r, 0.8, -1, -1);
   t += 0.01; 
drawFiveSidedBox(-100, -300, 0, 6000, 2000, 1800);
  pop();




//the white cage
  //fill(120, 120, 200);
  push();
  noFill();           
  stroke(255);        
  strokeWeight(2);
  translate(-100, 0, 0);
  box(250);
  pop();




//the pet but alive
if (generatepetform && petform.length > 0){
  push();
  rotateY(90);
  translate(0, -125, 1);  

  for (let i = 0; i < petform.length; i++) {
    let L = petform[i];
    let charCode = L.char.charCodeAt(0);
    
    push();
    translate(L.x, L.y , -100);
    let shakeX = sin(frameCount * 3 + i * 50) * (charCode % 5 + 1);
    let shakeY = cos(frameCount * 4 + i * 60) * (charCode % 4 + 1);
    translate(shakeX, shakeY, 0);  
    rotate(L.rotateAngle);
    
    
    let flashColor = lerpColor(
  color(0, 0, 0),     // 正常黑色
  color(255, 0, 0),   // 闪红
  triangleFlash       // 0~1
);

fill(flashColor);

// 让闪红逐渐消失
triangleFlash *= 0.85;
    noStroke();
    
   
    let side1 = L.size * (0.2 + (charCode % 17) * 0.15);
    let side2 = L.size * (0.2 + ((charCode * 7) % 19) * 0.15);
    let side3 = L.size * (0.2 + ((charCode * 13) % 23) * 0.15);
    let x1 = -side1 / 2;
    let y1 = 0;
    
    let x2 = side1 / 2;
    let y2 = 0;
    
    
    let cosC = (side1 * side1 + side2 * side2 - side3 * side3) / (2 * side1 * side2);
    cosC = constrain(cosC, -1, 1); 
    let angleC = acos(cosC);
    let x3 = x2 - side2 * cos(angleC);
    let y3 = side2 * sin(angleC);
    
    
    beginShape();
    vertex(x1, y1);
    vertex(x2, y2);
    vertex(x3, -y3);  
    endShape(CLOSE);
    
 
    
    pop();
  }
  pop();
}








//human
push();
 noStroke();
  translate(1000, -200, 0);
  rotateY(-90);
  rotateX(-10);
  blendMode(BLEND);   // 正常混合模式
  let bounceScale = 1 + humanBounce;
humanBounce *= 0.85;  // 每帧衰减（0.85 越小说明反弹快）

scale(bounceScale);

// --- 绘制 ---
if (humanImgs[currentHumanIndex]) {
  texture(humanImgs[currentHumanIndex]);
  plane(1366, 1024);
} 
  pop();
  


 




// === Triangle 的 3D 血条（没有文字） ===
push();

// 放在白色 cage 上面一点点
translate(0, -200, 800);
rotateZ(90);
   // x,y,z 可以自己慢慢调位置
// 如果你不想它自己转，就不要 rotate；现在它只是跟整个场景一起转
// rotateY(0); 

let maxLen = 500;  // 血条最长的长度
let ratio = constrain(triangleLife / 100, 0, 1);  // 0~1

// 背景条（灰色）
noStroke();
fill(255, 255, 255, 220);
beginShape();
  vertex(-maxLen / 2, 0, 0);
  vertex( maxLen / 2, 0, 0);
  vertex( maxLen / 2, 20, 0);
  vertex(-maxLen / 2, 20, 0);
endShape(CLOSE);

// 前景条（红色，根据血量缩短）
fill(0, 0, 0, 230);
let currentLen = maxLen * ratio;
beginShape();
  vertex(-maxLen / 2, 0, 1);
  vertex(-maxLen / 2 + currentLen, 0, 1);
  vertex(-maxLen / 2 + currentLen, 20, 1);
  vertex(-maxLen / 2, 20, 1);
endShape(CLOSE);

pop();

}

