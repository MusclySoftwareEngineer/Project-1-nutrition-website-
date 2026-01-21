console.log("main.js");


if (!document.querySelector(".header-btn")) {
  document.body.insertAdjacentHTML("afterbegin", `
<header class="site-header">
    <img src="./pic/left_one.jpeg" alt="Sport Nutrition" class="header-limage">
    <h1>Sport Nutrition</h1>
    <img src="./pic/nutritionpic.jpg" alt="Sport Nutrition" class="header-rimage">
</header>

<!-- header buttons -->
<div class="header-btn">
  <button type="button" id="home-btn" onclick="window.location.href='index.html'">Home
  </button>


  <div class="dropdown">
  <button type="button" id="vitamins-btn"
  aria-expanded="false"
  aria-controls="vitamins-menu">
  Vitamins
  <svg class="arrow" viewBox="0 4 24 7"
      aria-hidden="true">
      <path d="M6 6 L12 10 L18 6" /></svg></button>


<!-- PANEL MENU -->

<div id="vitamins-menu" class="dropdown-panel" hidden>
  <div class="dropdown-content">
    <a href="vitamin-a.html">Vitamin A</a>
    <a href="vitamin-b.html">Vitamin B</a>
    <a href="vitamin-c.html">Vitamin C</a>
  </div>
</div>
  </div>
</div>




<!-- text -->
<!-- text is moved to each html currently -->

`);
}

const btn = document.getElementById("vitamins-btn");
const menu = document.getElementById("vitamins-menu");
const arrow = document.querySelector("#vitamins-btn .arrow");

btn.addEventListener("click", (e) => {
  e.stopPropagation();

  if (menu.hasAttribute("hidden")) {
    menu.removeAttribute("hidden");          // SHOW
    btn.setAttribute("aria-expanded", "true");
    arrow.classList.add("rotate");
  } else {
    menu.setAttribute("hidden", "");         // HIDE
    btn.setAttribute("aria-expanded", "false");
    arrow.classList.remove("rotate");
  }
});