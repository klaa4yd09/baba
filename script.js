document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enter-btn");
  const preloader = document.getElementById("preloader");
  const particleContainer = document.querySelector(".particle-container");
  const bgImage = document.querySelector(".bg-image");
  const contentContainer = document.querySelector(".content-container");
  const backgroundLayers = document.querySelector(".background-layers");
  const audio = document.getElementById("background-audio");
  const clickSound = document.getElementById("click-sound");

  /* Preloader */
  const handlePageLoad = () => {
    preloader.classList.add("hidden");
    setTimeout(() => preloader.remove(), 1500);
  };
  if (document.readyState === "complete") {
    handlePageLoad();
  } else {
    window.addEventListener("load", handlePageLoad, { once: true });
  }

  /* Audio Fade-in */
  const playAudio = () => {
    if (audio) {
      audio.volume = 0;
      audio.play().catch((err) => console.warn("Audio blocked:", err));
      const fadeIn = setInterval(() => {
        if (audio.volume < 0.5) {
          audio.volume = Math.min(audio.volume + 0.05, 0.5);
        } else {
          clearInterval(fadeIn);
        }
      }, 300);
    }
    if (clickSound) {
      clickSound.volume = 0.5;
      clickSound.play();
    }
  };

  /* Particle System */
  const createParticle = () => {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    const size = Math.random() * 3 + 1;
    particle.style.width = particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${100 + Math.random() * 20}vh`;
    particle.style.animationDuration = `${12 + Math.random() * 8}s`;
    particle.style.animationDelay = `${Math.random() * 2}s`;
    particle.style.opacity = `${Math.random() * 0.8 + 0.2}`;
    particleContainer.appendChild(particle);

    particle.addEventListener("animationend", () => particle.remove());
  };
  setTimeout(() => setInterval(createParticle, 500), 2000);

  /* Parallax Effect */
  const sensitivity = 0.015;
  let mouseX = 0,
    mouseY = 0;
  let animationFrameId = null;

  const animateParallax = () => {
    const xOffset = (mouseX - window.innerWidth / 2) * sensitivity;
    const yOffset = (mouseY - window.innerHeight / 2) * sensitivity;

    bgImage.style.transform = `
      translate3d(-50%, -50%, -50px)
      translateX(${xOffset * -0.5}px)
      translateY(${yOffset * -0.5}px)
      rotateX(${yOffset * 0.05}deg)
      rotateY(${xOffset * 0.05}deg)
    `;
    backgroundLayers.style.transform = `
      rotateX(${yOffset * 0.05}deg)
      rotateY(${xOffset * 0.05}deg)
    `;
    contentContainer.style.transform = `
      translate3d(${xOffset * 0.08}px, ${yOffset * 0.08}px, 0)
      rotateX(${yOffset * 0.03}deg)
      rotateY(${xOffset * 0.03}deg)
    `;

    animationFrameId = requestAnimationFrame(animateParallax);
  };

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!animationFrameId) {
      animateParallax();
    }
  });

  /* Enter Transition */
  enterBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.add("fade-out");
    playAudio();
    setTimeout(() => {
      window.location.href = "home.html";
    }, 1000);
  });
});
