// SWIPER
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

// QUIZ
function checkAnswer(button, correct){

  if(correct){
    button.style.background = "#22c55e";
    button.innerHTML = "✅ Correct!";
  }else{
    button.style.background = "#ef4444";
    button.innerHTML = "❌ Try Again";
  }

}
