const target = document.querySelector("#vtm-c");

const content = document.createElement("div");
content.classList.add("vitamin-c-page");
content.innerHTML = `

<h2 class="vitamin-c-h21">Vitamin C</h2>

<div class="game-display" style="border: 2px solid black;">
  <img id="sun" src="./pic/sun.png" alt="sun">  

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

g.fillStyle = "#8B4513";
g.fillRect(0, groundCanvas.height - 35, groundCanvas.width, 40);


// cloud canvas setup
const gameDisplay = document.querySelector(".game-display");
const CLOUD_SRC = "./pic/cloud.png";

// Store 3 clouds
const clouds = [];

// Helper random function
function rand(min, max) {
  return Math.random() * (max - min) + min;
}

// Create 1 cloud element + its movement data
function createCloud(startX) {
  const img = document.createElement("img");
  img.src = CLOUD_SRC;
  img.alt = "cloud";
  img.className = "cloud";

  // random vertical position (your old top:50px becomes "range")
  const y = rand(10, 120);

  // random scale makes them look more natural
  const scale = rand(0.7, 1.2);

  img.style.top = `${y}px`;
  img.style.left = `${startX}px`;
  img.style.transform = `scale(${scale})`;

  gameDisplay.appendChild(img);

  // speed in px/sec (random per cloud)
  const speed = rand(20, 60);

  clouds.push({
    el: img,
    x: startX,
    y,
    speed,
    scale
  });
}

// Spawn exactly 3 clouds with irregular spacing
function spawnInitialClouds() {
  const W = gameDisplay.clientWidth;

  // Put them across and beyond the screen with random gaps
  let x = rand(0, W);
  for (let i = 0; i < 3; i++) {
    createCloud(x);
    x += rand(200, 450); // irregular gap between clouds
  }
}

spawnInitialClouds();

// Animation loop (move left forever)
let last = performance.now();

function animate(now) {
  const dt = (now - last) / 1000; // seconds
  last = now;

  const W = gameDisplay.clientWidth;

  for (const c of clouds) {
    c.x -= c.speed * dt;
    c.el.style.left = `${c.x}px`;

    // When cloud has moved out left side, respawn on right side
    // Use getBoundingClientRect to get actual on-screen width (after clamp & scale)
    const cloudWidth = c.el.getBoundingClientRect().width;

    if (c.x < -cloudWidth - 10) {
      // Respawn to the right with a random gap so it feels endless
      c.x = W + rand(100, 400);

      c.y = rand(10, 120);
      c.scale = rand(0.7, 1.2);
      c.speed = rand(20, 60);

      c.el.style.top = `${c.y}px`;
      c.el.style.transform = `scale(${c.scale})`;
      c.el.style.left = `${c.x}px`;
    }
  }

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
