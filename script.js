// SWIPER
var swiper = new Swiper(".mySwiper", {

  loop:true,

  pagination:{
    el:".swiper-pagination",
  },

});

// SCROLL
function scrollToSection(id){

  document.getElementById(id).scrollIntoView({
    behavior:"smooth"
  });

}

// ALERT BUTTON
function showAlert(message){

  alert(message);

}

// QUIZ
function checkAnswer(button,correct){

  if(correct){

    button.style.background="#22c55e";
    button.innerHTML="✅ Correct!";

  }

  else{

    button.style.background="#ef4444";
    button.innerHTML="❌ Try Again";

  }

}
