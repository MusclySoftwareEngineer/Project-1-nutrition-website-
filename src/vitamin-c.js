const target = document.querySelector("#vtm-c");

const content = document.createElement("div");
content.classList.add("vitamin-c-page");
content.innerHTML = `

<h2 class="vitamin-c-h21">Vitamin C  <img id="orange-pic" src="./pic/orange.png" alt="orange"></h2>

<div class="game-display" style="border: 2px solid black;">
  <img id="sun" src="./pic/Sun.png" alt="sun">  

  <canvas id="ground"></canvas>
</div>

<h2 class="vitamin-c-h22">Essential Information</h2>
<p class="vitamin-c-p1">Vitamin C is required for collagen synthesis, which supports skin, tendons, ligaments, cartilage, blood vessels, and bone structure.
It acts as a powerful antioxidant, neutralizing reactive oxygen species and protecting cells from oxidative damage.
Vitamin C is necessary for normal immune function, supporting barrier integrity and helping white blood cells function effectively.
It enhances non-heme iron absorption in the intestine by reducing ferric iron (Fe³⁺) to the more absorbable ferrous form (Fe²⁺).
Vitamin C participates in neurotransmitter synthesis, including dopamine and norepinephrine production.
It is involved in carnitine synthesis, which is important for fatty acid transport into mitochondria for energy production.
</p>

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

