function showMessage() {
    document.getElementById("message").innerText =
      "You clicked the button! 🎉 Now try changing the code!";
  }
  function createParticles() {
    const container = document.querySelector(".particles");
  
    for (let i = 0; i < 40; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
  
      // random position
      particle.style.left = Math.random() * 100 + "vw";
  
      // random size
      let size = Math.random() * 5 + 2;
      particle.style.width = size + "px";
      particle.style.height = size + "px";
  
      // random speed
      particle.style.animationDuration = Math.random() * 10 + 5 + "s";
  
      // random delay
      particle.style.animationDelay = Math.random() * 5 + "s";
  
      container.appendChild(particle);
    }
  }
  
  createParticles();