let currentSlide = 1;

function nextSlide() {
  document.getElementById("slide" + currentSlide).classList.remove("active");
  currentSlide++;
  document.getElementById("slide" + currentSlide).classList.add("active");
}

function checkAnswer(correct) {
  document.getElementById("result").innerHTML =
    correct ? "✅ Correct!" : "❌ Try again!";
}

function startWave() {
  let canvas = document.getElementById("waveCanvas");
  let ctx = canvas.getContext("2d");

  canvas.width = 400;
  canvas.height = 200;

  let t = 0;

  function draw() {
    ctx.clearRect(0, 0, 400, 200);

    ctx.beginPath();
    for (let x = 0; x < 400; x++) {
      let y = 100 + 30 * Math.sin((x + t) * 0.05);
      ctx.lineTo(x, y);
    }
    ctx.stroke();

    t += 2;
    requestAnimationFrame(draw);
  }

  draw();
}
