const target = document.querySelector("#vtm-b");

const content = document.createElement("div");
content.classList.add("vitamin-b-page");
content.innerHTML = `
<h2 class="vitamin-b-h21">Vitamin B</h2>
<canvas class="blogo" width="120" height="150"></canvas>
<h2 class="vitamin-b-h22">Essential Information</h2>
<p class="vitamin-b-p1">Vitamin B refers to a group of eight water-soluble vitamins called the B-complex (B1, B2, B3, B5, B6, B7, B9, B12).
  These vitamins help your body convert food into usable energy and support normal metabolism. They are also important for your nervous system and brain function, and they help your body make red blood cells.
  Especially B9 and B12 are essential for making and repairing DNA. A lack of vitamin B can cause fatigue, and
  certain deficiencies can cause anemia or nerve problems. especially exceeding the recommended daily intake of vitamin B6 can damage nerves.
</p>
<h2 class="vitamin-b-h23">Effectiveness of Each Vitamin B</h2>

<h3 class="vitamin-b-h31">Vitamin B1 (Thiamine)</h3>
<ul class="vitamin-b-ul1">
  <li>The body can use carbohydrates properly</li>
  <li>The body can produce energy (ATP) efficiently from glucose</li>
  <li>The body can break down branched-chain amino acdis (BCAAs) normally as part of overall energy and amino-acid metabolism</li>
  <li>Brain and nerve function stay normal because energy supply in nervous tissue remains stable.</li>
  <li>Pyruvate is processed normally, so it doesn’t back up and shift toward lactate the way it can in deficiency.</li>
</ul>

<h3 class="vitamin-b-h32">Vitamin B2 (Riboflavin)</h3>
<ul class="vitamin-b-ul1">
  <li>Energy production runs normally because riboflavin is converted into FMN and FAD, two coenzymes that many energy enzymes require.</li>
  <li>Fats, carbohydrates, and proteins are metabolized normally because FMN/FAD-dependent enzymes are used across these pathways (lots of oxidation–reduction steps)</li>
  <li>Mitochondrial “electron transfer” works properly (a major part of making ATP), since flavin coenzymes act as electron carriers in many reactions</li>
  <li>Antioxidant defense is supported in part because an FAD-dependent enzyme (glutathione reductase) helps maintain glutathione in its active, protective form</li>
  <li>Normal processing of some other vitamins is supported, because riboflavin-dependent enzymes are involved in steps that help maintain/activate certain B-vitamin pathways (this shows up clearly when B2 is deficient)</li>
  <li>Skin and mucous membrane integrity is maintained (deficiency commonly shows mouth/lip/tongue changes, which is why adequacy matters for “normal maintenance”)</li>
  <li>“Normal energy-yielding metabolism” is supported across ages (this is exactly how major authorities phrase the core function)</li>
  </ul>

<h3 class="vitamin-b-h33">Vitamin B3 (Niacin)</h3>
<ul class="vitamin-b-ul1">
  <li>Energy release from food runs normally because niacin is converted into NAD, which is required for many reactions that transfer energy from carbohydrates, fats, and proteins into ATP</li>
  <li>Normal “electron transfer” reactions keep working (oxidation–reduction reactions across metabolism) because NAD and NADP are central redox coenzymes used throughout cells</li>
  <li>Fatty-acid and cholesterol synthesis proceeds normally because NADP supports anabolic (building) reactions, including lipid and cholesterol synthesis</li>
  <li>Cellular antioxidant systems are supported because NADP plays a critical role in maintaining cellular antioxidant function</li>
  <li>DNA maintenance and repair capacity is supported because NAD is required for enzymes involved in genome integrity and related repair/control processes</li>
  <li>Normal gene regulation and cell-to-cell signaling are supported because NAD is required for enzymes involved in control of gene expression and cellular communication</li>
</ul>

<h3 class="vitamin-b-h34">Vitamin B5 (Pantothenic Acid)</h3>
<ul class="vitamin-b-ul1">
  <li>Coenzyme A (CoA) is produced normally, because pantothenic acid is a key building block of CoA</li>
  <li>Fat metabolism runs normally (both breaking down fat for energy and building fatty acids), because CoA and related “acyl” compounds are required for these steps</li>
  <li>Energy-yielding metabolism stays normal (overall conversion of food → usable cellular energy), which is why authorities summarize B5’s core role that way</li>
  <li>Acyl group transfer reactions work properly (a huge category of metabolism reactions), because CoA’s main job is carrying and transferring acyl groups (like acetyl-CoA, succinyl-CoA, etc.)</li>
  <li>Fatty-acid synthesis machinery functions normally, because pantothenic acid is also needed for acyl carrier protein (ACP), which is directly used in fatty-acid synthesis</li>
  <li>Normal synthesis of certain important molecules is supported, because CoA is required for making things such as cholesterol and steroid hormones, and also acetylcholine (a major neurotransmitter)</li>
</ul>

<h3 class="vitamin-b-h35">Vitamin B6 (Pyridoxine)</h3>
<ul class="vitamin-b-ul1">
  <li>Protein (amino-acid) metabolism runs normally because the active form (PLP) is needed for more than 100 enzyme reactions, mostly related to protein metabolism</li>
  <li>Neurotransmitter production stays normal (chemicals the nervous system uses to communicate) because many neurotransmitter-making reactions require PLP</li>
  <li>Normal use of stored carbohydrate (glycogen) is supported because PLP works with glycogen phosphorylase, the enzyme that releases glucose from glycogen</li>
  <li>One-carbon metabolism runs normally (important for making and modifying key molecules in cells) because PLP participates in one-carbon unit metabolism</li>
  <li>Immune function is supported at a normal level, since B6 is involved in immune function</li>
  <li>Metabolism of carbohydrates, lipids, and related pathways stays normal because PLP is also involved beyond protein—including carbohydrate and lipid metabolism</li>
</ul>

<h3 class="vitamin-b-h36">Vitamin B7 (Biotin)</h3>
<ul class="vitamin-b-ul1">
  <li>Carbohydrate metabolism runs normally because biotin is a coenzyme for pyruvate carboxylase, which helps convert pyruvate into oxaloacetate (a key step in gluconeogenesis)</li>
  <li>Fat metabolism runs normally because biotin is a required cofactor for enzymes (carboxylases) involved in fatty-acid metabolism</li>
  <li>Glucose-related metabolism runs normally (including key steps that support glucose handling and glucose production pathways) because biotin-dependent carboxylases include pyruvate carboxylase, which is central in these processes</li>
  <li>Certain amino-acid pathways run normally (notably pathways involving propionyl-CoA carboxylase and methylcrotonyl-CoA carboxylase) because these biotin-dependent enzymes catalyze critical steps in amino-acid metabolism</li>
  <li>Macronutrients (carbs, fat, protein) are converted into usable energy normally as a practical outcome of those enzyme systems working correctly</li>
  <li>Normal skin and mucous-membrane maintenance is supported (this is one of the best-established “maintenance” outcomes associated with adequate biotin)</li>
</ul>

<h3 class="vitamin-b-h37">Vitamin B9 (Folate)</h3>
<ul class="vitamin-b-ul1">
  <li>DNA is made normally, which matters for any tissue that needs regular cell replacement</li>
  <li>Cells can divide properly, which is especially important during periods of rapid growth (like pregnancy and infancy)</li>
  <li>Red blood cells are produced normally, helping to prevent certain types of anemia</li>
  <li>Homocysteine levels are regulated properly, which is important for cardiovascular health</li>
  <li>Brain function and mental health are supported, as folate is involved in neurotransmitter synthesis</li>
</ul>

<h3 class="vitamin-b-h38">Vitamin B12 (Cobalamin)</h3>
<ul class="vitamin-b-ul1">
  <li>Red blood cells are produced normally, helping to prevent megaloblastic anemia</li>
  <li>DNA synthesis and normal cell division proceed normally, especially in tissues with fast turnover (like bone marrow)</li>
  <li>Normal nervous system function is supported, including myelination (maintenance of the myelin sheath around nerves)</li>
  <li>Homocysteine is metabolized normally because B12 is required for methionine synthase, which converts homocysteine to methionine (this pathway is closely linked with folate)</li>
  <li>Certain fat- and amino-acid–related pathways run normally because B12 is required for L-methylmalonyl-CoA mutase, which helps process methylmalonyl-CoA (a key step tied to odd-chain fatty acids and some amino acids)</li>
  <li>Normal energy-yielding metabolism and fatigue resistance are supported at a baseline level in the sense that B12 helps prevent deficiency-related anemia and neurologic impairment that can cause tiredness. (It generally does not “boost energy” above normal when status is already adequate)</li>
</ul>


`;



if (target) {
  target.appendChild(content);
} else {
  document.body.appendChild(content);
}


// Blogo animation
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