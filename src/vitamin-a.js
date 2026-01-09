

const target = document.querySelector("#vtm-a");

const content = document.createElement("div");
content.innerHTML = `
<h2 class="vitamin-a-h21">Vitamin A</h2>
<img src="./pic/Vitamin-A.jpg" alt="vitamin a source" class="vitamin-a-pic1">

<h2 class="vitamin-a-h22">Essential Information</h2>
<p class="vitamin-a-p1">Vitamin A is a fat-soluble vitamin stored in the liver, so long-term intake matters more than daily intake.
   It's essential for night vision, immune defense, and keeping your eyes, skin, and body linings healthy. You get it as retinol from
    animal foods and supplements, or as beta-carotene from colorful vegetables, which your body converts as needed. Deficiency can show
     up as night blindness and dry eyes, especially if fat absorption is poor. Too much retinol (mainly from supplements or frequent liver) can be toxic, and high doses are especially dangerous during pregnancy.
</p>

<div class="vitamin-a-outlinedbox1">
 <h2 class="vitamin-a-h23">Recommended daily intake</h2>
 <img src="./pic/vitamin-A-intake.png" alt="A daily intake"
 class="vitamin-a-pic2">
</div>

<div class="vitamin-a-outlinedbox2">
 <h3 class="vitamin-a-h31">Tolerable upper intake levels for preformed vitamin A</h3>
 <img src="./pic/upperintake.png" alt="A upper intake"
 class="vitamin-a-pic3">
</div>
<a class="vitamin-a-source1" href="https://ods.od.nih.gov/factsheets/VitaminA-HealthProfessional/" target="_blank" rel="noopener noreferrer">Source</a>

<h2 class="vitamin-a-h24">Side Effects</h2>
<p class="vitamin-a-p2">Vitamin A doesn’t cause side effects when consumed in appropriate amounts, but because
 it’s fat-soluble, excessive intake can cause side effects.
</p>

<ul class="vitamin-a-ul1">
  <li>Dry, rough skin, cracked lips</li>
  <li>Hair loss</li>
  <li>Headache</li>
  <li>Bone and join pain</li>
  <li>Liver damage</li>
  <li>Nausea, vomiting</li>
  <li>Blurred or Double vision</li>
  <li>Skin peeling or Desquamation</li>
</ul>
`;



if (target) {
  target.appendChild(content);
} else {
  document.body.appendChild(content);
}