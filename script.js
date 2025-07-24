
const wheel = document.getElementById("wheel");
const ctx = wheel.getContext("2d");
const prizes = [
  "iPhone 16 Pro",
  "MacBook",
  "AirPods",
  "12 уроків англійської безкоштовно",
  "Безкоштовний розмовний клуб"
];
const colors = ["#ffd700", "#add8e6", "#ffb6c1", "#90ee90", "#ffa07a"];
const spinBtn = document.getElementById("spin");
const result = document.getElementById("result");
const prizeText = document.getElementById("prizeText");

function drawWheel() {
  const angle = (2 * Math.PI) / prizes.length;
  for (let i = 0; i < prizes.length; i++) {
    ctx.beginPath();
    ctx.fillStyle = colors[i % colors.length];
    ctx.moveTo(150, 150);
    ctx.arc(150, 150, 150, angle * i, angle * (i + 1));
    ctx.lineTo(150, 150);
    ctx.fill();
    ctx.fillStyle = "#000";
    ctx.font = "12px sans-serif";
    ctx.translate(150, 150);
    ctx.rotate(angle * (i + 0.5));
    ctx.fillText(prizes[i], 60, 0);
    ctx.rotate(-angle * (i + 0.5));
    ctx.translate(-150, -150);
  }
}
drawWheel();

spinBtn.addEventListener("click", () => {
  const winnerIndex = Math.floor(Math.random() * prizes.length);
  const winner = prizes[winnerIndex];
  prizeText.textContent = "Ви виграли: " + winner + "!";
  result.classList.remove("hidden");
});
