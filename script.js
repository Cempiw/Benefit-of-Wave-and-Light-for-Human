// SWIPER
var swiper = new Swiper(".mySwiper", {

  effect: "cards",
  grabCursor: true,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

});

// ROLE INFORMATION
function showRole(role){

  const roleInfo = document.getElementById("roleInfo");

  if(role === "engineer"){

    roleInfo.innerHTML = `
      <h3>📡 Telecommunications Engineer</h3>
      <p>
        Focuses on internet speed, communication systems,
        and technology infrastructure.
      </p>
    `;

  }

  else if(role === "medical"){

    roleInfo.innerHTML = `
      <h3>🏥 Medical Physicist</h3>
      <p>
        Uses wave technology for medical imaging,
        diagnosis, and healthcare safety.
      </p>
    `;

  }

  else if(role === "environment"){

    roleInfo.innerHTML = `
      <h3>🌱 Environmental Scientist</h3>
      <p>
        Studies environmental impact and sustainable technology use.
      </p>
    `;

  }

  else if(role === "health"){

    roleInfo.innerHTML = `
      <h3>❤️ Community Health Advocate</h3>
      <p>
        Protects community health and public safety.
      </p>
    `;

  }

  else if(role === "youth"){

    roleInfo.innerHTML = `
      <h3>📱 Youth Technology Activist</h3>
      <p>
        Supports technology innovation while considering ethical issues.
      </p>
    `;

  }

}

// QUIZ
function checkAnswer(button, correct){

  if(correct){

    button.style.background = "#22c55e";
    button.innerHTML = "✅ Correct!";

  }

  else{

    button.style.background = "#ef4444";
    button.innerHTML = "❌ Try Again";

  }

}
