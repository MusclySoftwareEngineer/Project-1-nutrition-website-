const target = document.querySelector("#vtm-c");

const content = document.createElement("div");
content.classList.add("vitamin-c-page");
content.innerHTML = `

<h2 class="vitamin-c-h21">Vitamin C</h2>

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
  return Math.random() * (max - min) + min;   // Helper random function
}

function createCloud(startX) {
  const img = document.createElement("img");    // Create 1 cloud element + its movement data
  img.src = CLOUD_SRC;
  img.alt = "cloud";
  img.className = "cloud";
  
  const cloudHeight = gameDisplay.clientHeight;
  const y = rand (7, cloudHeight * 0.1);  // random vertical position

  const scale = rand(0.7, 0.7); // random scale makes them look more natural

  img.style.top = `${y}px`;
  img.style.left = `${startX}px`;
  img.style.transform = `scale(${scale})`;

  gameDisplay.appendChild(img);

  const speed = rand(120, 200);    // speed in px/sec (random per cloud)

  clouds.push({
    el: img,
    x: startX,
    y,
    speed,
    scale
  });
}

function spawnInitialClouds() {    // Spawn clouds with irregular spacing
  const W = gameDisplay.clientWidth;

  let x = rand(0, W);   // Put them across and beyond the screen with random gaps
  for (let i = 0; i < 7; i++) {
    createCloud(x);

    x += rand(300, 450); // irregular gap between clouds
  }
}

spawnInitialClouds();

let last = performance.now();  // Animation loop (move left forever)

function animate(now) {
  const dt = (now - last) / 1000; // seconds
  last = now;

  const W = gameDisplay.clientWidth;

  for (const c of clouds) {
    c.x -= c.speed * dt;
    c.el.style.left = `${c.x}px`;

    /* When cloud has moved out left side, respawn on right side
     Use getBoundingClientRect to get actual on-screen width (after clamp & scale) */
    const cloudWidth = c.el.getBoundingClientRect().width;

    if (c.x < -cloudWidth - 10) {
      
      // Respawning cloud
      c.x = W + rand(100, 200);

      const re_size = gameDisplay.clientHeight;
      const minY = Math.max(7, re_size * 0.01);
      const maxY = Math.min(30, re_size * 0.2);
      c.y = rand(minY, maxY);
      c.scale = rand(0.3, 0.7);   // spawning cloud size
      c.speed = rand(50, 60);

      c.el.style.top = `${c.y}px`;
      c.el.style.transform = `scale(${c.scale})`;
      c.el.style.left = `${c.x}px`;
    }
  }

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
