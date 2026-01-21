alert("JS loaded");

const target = document.querySelector("#vtm-b");

const content = document.createElement("div");
content.classList.add("vitamin-b-page");
content.innerHTML = `
<h2 class="vitamin-b-h21">Vitamin B</h2>
<canvas class="blogo" width="120" height="150"></canvas>
<h2 class="vitamin-b-h22">Essential Information</h2>



`;



if (target) {
  target.appendChild(content);
} else {
  document.body.appendChild(content);
}

const canvas = content.querySelector('.blogo');
const bctx = canvas.getContext('2d');

bctx.fillStyle = "grey";
bctx.textAlign = "center";
bctx.textBaseline = "middle";
bctx.font = "bold 180px system-ui, -apple-system, Segoe UI, Arial";

bctx.fillText("B", canvas.width / 2, canvas.height / 2);

let t = 0;
const amplitude = 20;
const speed = 0.7;
function animate() {
  t += 0.05 * speed;
  const y = Math.sin(t * speed) * amplitude;
  canvas.style.transform = `translateY(${y}px)`;
  requestAnimationFrame(animate);
}
animate();