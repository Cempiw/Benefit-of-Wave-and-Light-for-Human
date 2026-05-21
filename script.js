let slides;
let currentSlide = 0;

window.onload = function () {
  slides = document.querySelectorAll(".slide");

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide++;

  if (currentSlide < slides.length) {
    slides[currentSlide].classList.add("active");
  }
}

// ================= QUIZ SYSTEM =================

const quizData = [
  {
    question: "What does a wave transfer?",
    answers: ["Energy", "Matter"],
    correct: 0
  },
  {
    question: "Which wave does NOT need a medium?",
    answers: ["Sound wave", "Light wave"],
    correct: 1
  },
  {
    question: "What is amplitude?",
    answers: ["Height of the wave", "Wave speed"],
    correct: 0
  },
  {
    question: "What is wavelength?",
    answers: ["Distance between peaks", "Wave height"],
    correct: 0
  },
  {
    question: "Which is a mechanical wave?",
    answers: ["Light wave", "Sound wave"],
    correct: 1
  },
  {
    question: "Wi-Fi is a type of...",
    answers: ["Mechanical wave", "Electromagnetic wave"],
    correct: 1
  },
  {
    question: "What happens when frequency increases?",
    answers: ["More waves per second", "Wave stops"],
    correct: 0
  },
  {
    question: "Which tool uses light waves?",
    answers: ["X-ray", "Hammer"],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;
function updateProgress() {
  let percent = (currentQuestion / quizData.length) * 100;
  document.getElementById("progressBar").style.width = percent + "%";
}
function loadQuestion() {
  updateProgress();

  let q = quizData[currentQuestion];
  document.getElementById("question").innerText = q.question;

  let answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach((answer, index) => {
    let btn = document.createElement("button");
    btn.innerText = answer;
    btn.onclick = () => selectAnswer(index);
    answersDiv.appendChild(btn);
  });

  document.getElementById("feedback").innerText = "";
  document.getElementById("nextBtn").style.display = "none";
}

function selectAnswer(index) {
  let correct = quizData[currentQuestion].correct;
  let buttons = document.querySelectorAll("#answers button");

  buttons.forEach((btn, i) => {
    if (i === correct) {
      btn.style.background = "#4CAF50";
    } else {
      btn.style.background = "#ff6b6b";
    }
    btn.disabled = true;
  });

  if (index === correct) {
    document.getElementById("feedback").innerText = "✅ Correct!";
    score++;
  } else {
    document.getElementById("feedback").innerText = "❌ Wrong!";
  }

  document.getElementById("nextBtn").style.display = "inline-block";
}
function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  document.getElementById("quiz-container").innerHTML = "";
  document.getElementById("finalScore").innerText =
    "🎉 Your Score: " + score + " / " + quizData.length;
}

// load first question automatically
window.onload = function () {
  loadQuestion();
};

// WAVE SIMULATION
function startWave() {
  let canvas = document.getElementById("waveCanvas");
  let ctx = canvas.getContext("2d");

  canvas.width = 400;
  canvas.height = 200;

  let t = 0;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();

    for (let x = 0; x < canvas.width; x++) {
      let y = 100 + 30 * Math.sin((x + t) * 0.05);
      ctx.lineTo(x, y);
    }

    ctx.stroke();

    t += 5;
    requestAnimationFrame(draw);
  }

  draw();
}
