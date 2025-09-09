// ----------------- CONFIG -----------------
const siteConfig = {
  galleryItems: [
    { type: "image", src: "23.jpg", caption: "💖" },
    { type: "image", src: "25.jpg", caption: "💖" },
    { type: "image", src: "17.jpg", caption: "💖" },
    { type: "image", src: "51.jpg", caption: "💖" },
    { type: "image", src: "33.jpg", caption: "💖" },
    { type: "image", src: "26.jpg", caption: "💖" },
    { type: "image", src: "27.jpg", caption: "💖" },
    { type: "image", src: "21.jpg", caption: "💖" },
    { type: "image", src: "24.jpg", caption: "💖" },
    { type: "video", src: "28.mp4", caption: "💖" },
    { type: "video", src: "29.mp4", caption: "💖" },
    { type: "video", src: "30.mp4", caption: "💖" },
    { type: "video", src: "32.mp4", caption: "💖" },
    { type: "image", src: "42.jpg", caption: "💖" },
    { type: "image", src: "43.jpg", caption: "💖" },
    { type: "image", src: "16.jpg", caption: "💖" },
    { type: "image", src: "19.jpg", caption: "💖" },
    { type: "image", src: "65.jpg", caption: "💖" },
    { type: "video", src: "20.mp4", caption: "💖" },
    { type: "image", src: "18.jpg", caption: "💖" },
    { type: "image", src: "61.jpg", caption: "💖" },
    { type: "image", src: "22.jpg", caption: "💖" },
    { type: "image", src: "54.jpg", caption: "💖" },
    { type: "video", src: "49.mp4", caption: "💖" },
    { type: "image", src: "59.jpg", caption: "💖" },
    { type: "image", src: "41.jpg", caption: "💖" },
    { type: "image", src: "56.jpg", caption: "💖" },
    { type: "video", src: "1.mp4", caption: "💖" },
    { type: "video", src: "2.mp4", caption: "💖" },
    { type: "video", src: "3.mp4", caption: "💖" },
    { type: "image", src: "4.jpg", caption: "💖" },
    { type: "image", src: "5.jpg", caption: "💖" },
    { type: "image", src: "6.jpg", caption: "💖" },
    { type: "image", src: "7.jpg", caption: "💖" },
    { type: "image", src: "8.jpg", caption: "💖" },
    { type: "image", src: "9.jpg", caption: "💖" },
    { type: "image", src: "10.jpg", caption: "💖" },
    { type: "image", src: "12.jpg", caption: "💖" },
    { type: "image", src: "13.jpg", caption: "💖" },
    { type: "image", src: "14.jpg", caption: "💖" },
    { type: "image", src: "profile.jpg", caption: "💖" },
    { type: "video", src: "45.mp4", caption: "💖" },
    { type: "image", src: "46.jpg", caption: "💖" },
    { type: "video", src: "47.mp4", caption: "💖" },
    { type: "video", src: "48.mp4", caption: "💖" },
    { type: "video", src: "50.mp4", caption: "💖" },
    { type: "video", src: "52.mp4", caption: "💖" },
    { type: "video", src: "53.mp4", caption: "💖" },
    { type: "video", src: "55.mp4", caption: "💖" },
    { type: "video", src: "57.mp4", caption: "💖" },
    { type: "video", src: "58.mp4", caption: "💖" },
    { type: "video", src: "60.mp4", caption: "💖" },
    { type: "video", src: "62.mp4", caption: "💖" },
    { type: "video", src: "63.mp4", caption: "💖" },
    { type: "video", src: "64.mp4", caption: "💖" },
    { type: "video", src: "66.mp4", caption: "💖" },
    { type: "image", src: "31.jpg", caption: "💖" },
    { type: "video", src: "35.mp4", caption: "💖" },
    { type: "image", src: "36.jpg", caption: "💖" },
    { type: "video", src: "38.mp4", caption: "💖" },
    { type: "video", src: "39.mp4", caption: "💖" },
    { type: "image", src: "40.jpg", caption: "💖" },
    { type: "video", src: "44.mp4", caption: "💖" },
    { type: "image", src: "11.jpg", caption: "💖" },
  ],
  particles: {
    count: 50,
    size: { min: 3, max: 6 },
    speed: { min: 0.2, max: 0.9 },
    color: "rgba(255,182,193,0.45)",
    shape: "circle",
    wander: 0.05,
  },
};

// ------------ DOM SELECTORS -------------
const galleryGrid = document.getElementById("gallery-grid");
const bgMusic = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");
const musicIcon = musicBtn.querySelector(".music-icon");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxVideo = document.getElementById("lightbox-video");
const lightboxCaption = document.getElementById("lightbox-caption");
const lbClose = document.getElementById("lightbox-close");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;

// ------------------ UTIL: assign spans for aesthetic layout ------------------
function pickSpan(index) {
  // Use a more predictable pattern for better mobile layout
  if (window.innerWidth <= 700) {
    return "span-4"; // Mobile devices
  }
  const pattern = [
    "span-3",
    "span-4",
    "span-2",
    "span-3",
    "span-3",
    "span-4",
    "span-2",
  ];
  return pattern[index % pattern.length];
}

// ------------------ CREATE GALLERY ------------------
function createGalleryItem(item, idx) {
  const el = document.createElement("div");
  el.classList.add("gallery-item");
  el.classList.add(pickSpan(idx));

  const mediaWrap = document.createElement("div");
  mediaWrap.className = "media-wrap";

  if (item.type === "image") {
    const img = document.createElement("img");
    img.dataset.src = item.src;
    img.alt = item.caption || "photo";
    img.loading = "lazy";
    mediaWrap.appendChild(img);
  } else {
    const vid = document.createElement("video");
    vid.dataset.src = item.src;
    vid.preload = "metadata";
    vid.muted = true;
    vid.playsInline = true;
    vid.setAttribute("aria-label", item.caption || "video");
    mediaWrap.appendChild(vid);

    const play = document.createElement("div");
    play.className = "video-play";
    play.textContent = "▶";
    el.appendChild(play);
  }

  const caption = document.createElement("div");
  caption.className = "gallery-caption";
  caption.textContent = item.caption || "";

  el.appendChild(mediaWrap);
  el.appendChild(caption);

  // open lightbox on click
  el.addEventListener("click", () => {
    currentIndex = idx;
    openLightbox(siteConfig.galleryItems[idx]);
  });

  return el;
}

// ---------- Lazy load via IntersectionObserver ----------
const io = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const media = entry.target.querySelector("img,video");
      if (media) {
        const src = media.dataset.src;
        if (media.tagName === "IMG") {
          media.src = src;
          media.onload = () => entry.target.classList.add("loaded");
        } else {
          media.src = src;
          media.onloadeddata = () => entry.target.classList.add("loaded");
          // simple hover preview for larger screens
          media.addEventListener("mouseenter", () => {
            if (window.innerWidth > 700) media.play();
          });
          media.addEventListener("mouseleave", () => {
            media.pause();
            media.currentTime = 0;
          });
        }
      }
      obs.unobserve(entry.target);
    });
  },
  {
    threshold: 0.12,
  }
);

// load gallery
function loadGallery() {
  siteConfig.galleryItems.forEach((item, idx) => {
    const tile = createGalleryItem(item, idx);
    galleryGrid.appendChild(tile);
    io.observe(tile);
  });
}

// --------------- LIGHTBOX ---------------
function openLightbox(item) {
  lightbox.classList.add("show");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  if (item.type === "image") {
    lightboxVideo.style.display = "none";
    lightboxVideo.pause();
    lightboxVideo.src = "";
    lightboxImg.style.display = "block";
    lightboxImg.src = item.src;
    lightboxImg.alt = item.caption || "";
  } else {
    lightboxImg.style.display = "none";
    lightboxImg.src = "";
    lightboxVideo.style.display = "block";
    lightboxVideo.src = item.src;
    lightboxVideo.load();
    lightboxVideo.play().catch(() => {
      /* silence autoplay errors */
    });
  }
  lightboxCaption.textContent = item.caption || "";
  // focus for accessibility
  setTimeout(() => document.getElementById("lightbox-media").focus(), 180);
}

function closeLightbox() {
  lightbox.classList.remove("show");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  // stop video
  lightboxVideo.pause();
  lightboxVideo.src = "";
  lightboxImg.src = "";
  lightboxCaption.textContent = "";
}

function navigate(direction) {
  currentIndex =
    (currentIndex + direction + siteConfig.galleryItems.length) %
    siteConfig.galleryItems.length;
  openLightbox(siteConfig.galleryItems[currentIndex]);
}

// lightbox event handlers
lbClose.addEventListener("click", closeLightbox);
prevBtn.addEventListener("click", () => navigate(-1));
nextBtn.addEventListener("click", () => navigate(1));
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

// keyboard nav
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("show")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") navigate(-1);
  if (e.key === "ArrowRight") navigate(1);
});

// swipe support
let touchStartX = 0;
lightbox.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});
lightbox.addEventListener("touchend", (e) => {
  const dx = e.changedTouches[0].screenX - touchStartX;
  if (dx < -50) navigate(1);
  if (dx > 50) navigate(-1);
});

// ---------------- MUSIC ----------------
musicBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play().catch(() => {
      /* autoplay blocked on some browsers */
    });
    musicBtn.classList.add("playing");
    musicBtn.setAttribute("aria-pressed", "true");
    localStorage.setItem("memory_playMusic", "true");
    musicIcon.textContent = "🔊";
  } else {
    bgMusic.pause();
    musicBtn.classList.remove("playing");
    musicBtn.setAttribute("aria-pressed", "false");
    localStorage.setItem("memory_playMusic", "false");
    musicIcon.textContent = "🎵";
  }
});

// persist music preference
document.addEventListener("DOMContentLoaded", () => {
  loadGallery();
  const play = localStorage.getItem("memory_playMusic") === "true";
  if (play) {
    bgMusic.play().catch(() => {});
    musicBtn.classList.add("playing");
    musicBtn.setAttribute("aria-pressed", "true");
    musicIcon.textContent = "🔊";
  }
  initParticles(); // start particles after DOM ready
});

// ---------------- PARTICLES (canvas) ----------------
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");
let particles = [];
let animId = null;

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * (canvas.width || window.innerWidth);
    this.y =
      canvas.height + Math.random() * (canvas.height || window.innerHeight);
    this.size =
      Math.random() *
        (siteConfig.particles.size.max - siteConfig.particles.size.min) +
      siteConfig.particles.size.min;
    this.speed =
      Math.random() *
        (siteConfig.particles.speed.max - siteConfig.particles.speed.min) +
      siteConfig.particles.speed.min;
    this.color = siteConfig.particles.color;
    this.wander = (Math.random() - 0.5) * siteConfig.particles.wander;
    this.spawn = Date.now();
  }
  update() {
    this.y -= this.speed;
    this.x += this.wander * this.speed;
    if (this.y < -this.size) this.reset();
  }
  draw() {
    ctx.globalAlpha = 0.9;
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function initParticles() {
  cancelAnimationFrame(animId);
  resizeCanvas();
  particles = [];
  for (let i = 0; i < siteConfig.particles.count; i++) {
    particles.push(new Particle());
  }
  animate();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const p of particles) {
    p.update();
    p.draw();
  }
  animId = requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
  initParticles();
});

// initialize when script loads (main call occurs on DOMContentLoaded above)
