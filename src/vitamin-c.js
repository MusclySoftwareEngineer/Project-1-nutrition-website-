const target = document.querySelector("#vtm-c");

const content = document.createElement("div");
content.classList.add("vitamin-c-page");
content.innerHTML = `

<h2 class="vitamin-c-h21">Vitamin C  <img id="orange-pic" src="./pic/orange.png" alt="orange"></h2>

<div class="game-display" style="border: 2px solid black;">
  <img id="sun" src="./pic/Sun.png" alt="sun">  

  <canvas id="ground"></canvas>
  <canvas id="protagonist"></canvas>
  <canvas id="coin"></canvas>
</div>

`;

if (target) {
  target.appendChild(content);
} else {
  document.body.appendChild(content);
}

// ground canvas setup
const groundCanvas = document.getElementById("ground");
const g = groundCanvas.getContext("2d");

const W = groundCanvas.width;
const H = groundCanvas.height;

const groundHeight = 20;
const grassHeight = 3;
const groundTop = H - groundHeight;


g.fillStyle = "#8B4513";
g.fillRect(0, groundTop, groundCanvas.width, groundHeight);
g.fillStyle = "green";
g.fillRect(0, groundTop, groundCanvas.width, grassHeight);


//  cloud setup
const gameDisplay = document.querySelector(".game-display");
const CLOUD_SRC = "./pic/cloud.png";

const clouds = [];    // Store cloud count

function rand(min, max) {
  return Math.random() * (max - min) + min;  
}

function createCloud() {
  const img = document.createElement("img");    // Create 1 cloud element + its movement data
  img.src = CLOUD_SRC;
  img.alt = "cloud";
  img.className = "cloud";
  
  const cloudHeight = gameDisplay.clientHeight;
  const cloudWidth = gameDisplay.clientWidth;
  
  const x = cloudWidth + rand(0, cloudWidth * 0.8); // start just beyond right edge
  const y = rand(7, cloudHeight * 0.13); // random vertical position
  const scale = rand(0.5, 0.7); // random scale makes them look more natural
const cloud_travelSpeed = 3; // by seconds to cross the screen
  function cloudspeedperSecond() {
    const w = gameDisplay.clientWidth;
    return w / cloud_travelSpeed;
  }
  const speed = cloudspeedperSecond();
  
 

  img.style.top = `${y}px`;
  img.style.left = `${x}px`;
  img.style.transform = `scale(${scale})`;

  gameDisplay.appendChild(img);

  clouds.push({
    el: img,
    x,
    y,
    speed,
    scale
  });
}


  for (let i = 0; i < 3; i++) createCloud();

let last = performance.now();  // Animation loop (move left forever)

let spawnTimer = 0;
const spawnEvery = 1.7; // seconds

function animate(now) {
  const dt = (now - last) / 1000; // seconds
  last = now;
   spawnTimer += dt;
   while (spawnTimer > spawnEvery) {
     createCloud();
     spawnTimer -= spawnEvery;
   }

 // Move & remove clouds
  for (let i = clouds.length - 1; i >= 0; i--) {
    const c = clouds[i];

    c.x -= c.speed * dt;
    c.el.style.left = `${c.x}px`;

    const cloudWidth = c.el.getBoundingClientRect().width;

    // If cloud exits left, delete it (no recycling)
    if (c.x < -cloudWidth - 10) {
      c.el.remove();
      clouds.splice(i, 1);
    }
  }

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

// fruit line setup
const fruitLine = document.querySelector(".game-display"); 

const fruitsSRC = [
  "./pic/kiwi.png",
  "./pic/strawberry.png",
  "./pic/talkingorange.png"
];

const fruitY = 0.75 * gameDisplay.clientHeight;
const fruitGap = 100;
const fruitSpeed = 100;

// create 3 fruits
const fruits = [];
for (let i = 0; i < fruitsSRC.length; i++) {
  const img = document.createElement("img");
  img.src = fruitsSRC[i];
  img.alt = "fruit";
  img.className = "fruit";
  img.style.top = `${fruitY}px`;   // CSS should handle position:absolute
  fruitLine.appendChild(img);

  fruits.push({
    el: img,
    x: fruitLine.clientWidth + 20 + i * fruitGap,
  });
}

const strawberryHeight = 0.027 * gameDisplay.clientHeight; // Adjust strawberry height based on game display size
const strawberry = fruits.at(1);
if (strawberry) {
  strawberry.el.style.top = `${fruitY - strawberryHeight}px`;
}

let fruitLast = performance.now();

function animateFruits(now) {
  const dt = (now - fruitLast) / 1000;
  fruitLast = now;

  // move left
  for (const f of fruits) {
    f.x -= fruitSpeed * dt;
    f.el.style.left = `${f.x}px`;
  }

  // recycle to right when off-screen
  for (const f of fruits) {
    const w = f.el.getBoundingClientRect().width || 80; // fallback
    if (f.x < -w) {
      let maxX = fruits[0].x;
      for (const other of fruits) if (other.x > maxX) maxX = other.x;
      f.x = maxX + fruitGap;
      f.el.style.left = `${f.x}px`;
    }
  }

  requestAnimationFrame(animateFruits);
}

requestAnimationFrame(animateFruits);
