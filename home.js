// Data Configuration
const siteConfig = {
  galleryItems: [
    { type: "image", src: "23.jpg", caption: "❤️" },
    { type: "image", src: "25.jpg", caption: "❤️" },
    { type: "image", src: "17.jpg", caption: "❤️" },
    { type: "video", src: "a.mp4", caption: "❤️" },
    { type: "image", src: "g.jpg", caption: "❤️" },
    { type: "image", src: "f.jpg", caption: "❤️" },
    { type: "image", src: "e.jpg", caption: "❤️" },
    { type: "video", src: "b.mp4", caption: "❤️" },
    { type: "image", src: "51.jpg", caption: "❤️" },
    { type: "image", src: "33.jpg", caption: "❤️" },
    { type: "image", src: "26.jpg", caption: "❤️" },
    { type: "image", src: "27.jpg", caption: "❤️" },
    { type: "video", src: "c.mp4", caption: "❤️" },
    { type: "video", src: "d.mp4", caption: "❤️" },
    { type: "image", src: "21.jpg", caption: "❤️" },
    { type: "image", src: "24.jpg", caption: "❤️" },
    { type: "video", src: "28.mp4", caption: "❤️" },
    { type: "video", src: "29.mp4", caption: "❤️" },
    { type: "video", src: "30.mp4", caption: "❤️" },
    { type: "video", src: "32.mp4", caption: "❤️" },
    { type: "image", src: "42.jpg", caption: "❤️" },
    { type: "image", src: "43.jpg", caption: "❤️" },
    { type: "image", src: "16.jpg", caption: "❤️" },
    { type: "image", src: "19.jpg", caption: "❤️" },
    { type: "image", src: "65.jpg", caption: "❤️" },
    { type: "video", src: "20.mp4", caption: "❤️" },
    { type: "image", src: "18.jpg", caption: "❤️" },
    { type: "image", src: "61.jpg", caption: "❤️" },
    { type: "image", src: "22.jpg", caption: "❤️" },
    { type: "image", src: "54.jpg", caption: "❤️" },
    { type: "video", src: "49.mp4", caption: "❤️" },
    { type: "image", src: "59.jpg", caption: "❤️" },
    { type: "image", src: "41.jpg", caption: "❤️" },
    { type: "image", src: "56.jpg", caption: "❤️" },
    { type: "video", src: "1.mp4", caption: "❤️" },
    { type: "video", src: "2.mp4", caption: "❤️" },
    { type: "video", src: "3.mp4", caption: "❤️" },
    { type: "image", src: "4.jpg", caption: "❤️" },
    { type: "image", src: "5.jpg", caption: "❤️" },
    { type: "image", src: "6.jpg", caption: "❤️" },
    { type: "image", src: "7.jpg", caption: "❤️" },
    { type: "image", src: "8.jpg", caption: "❤️" },
    { type: "image", src: "9.jpg", caption: "❤️" },
    { type: "image", src: "10.jpg", caption: "❤️" },
    { type: "image", src: "12.jpg", caption: "❤️" },
    { type: "image", src: "13.jpg", caption: "❤️" },
    { type: "image", src: "14.jpg", caption: "❤️" },
    { type: "image", src: "profile.jpg", caption: "❤️" },
    { type: "video", src: "45.mp4", caption: "❤️" },
    { type: "image", src: "46.jpg", caption: "❤️" },
    { type: "video", src: "47.mp4", caption: "❤️" },
    { type: "video", src: "48.mp4", caption: "❤️" },
    { type: "video", src: "50.mp4", caption: "❤️" },
    { type: "video", src: "52.mp4", caption: "❤️" },
    { type: "video", src: "53.mp4", caption: "❤️" },
    { type: "video", src: "55.mp4", caption: "❤️" },
    { type: "video", src: "57.mp4", caption: "❤️" },
    { type: "video", src: "58.mp4", caption: "❤️" },
    { type: "video", src: "60.mp4", caption: "❤️" },
    { type: "video", src: "62.mp4", caption: "❤️" },
    { type: "video", src: "63.mp4", caption: "❤️" },
    { type: "video", src: "64.mp4", caption: "❤️" },
    { type: "video", src: "66.mp4", caption: "❤️" },
    { type: "image", src: "31.jpg", caption: "❤️" },
    { type: "video", src: "35.mp4", caption: "❤️" },
    { type: "image", src: "36.jpg", caption: "❤️" },
    { type: "video", src: "38.mp4", caption: "❤️" },
    { type: "video", src: "39.mp4", caption: "❤️" },
    { type: "image", src: "40.jpg", caption: "❤️" },
    { type: "video", src: "44.mp4", caption: "❤️" },
    { type: "image", src: "11.jpg", caption: "❤️" },
  ],
};

// DOM Elements
const loader = document.getElementById("loader");
const mainContent = document.getElementById("main-content");
const siteHeader = document.getElementById("site-header");
const photosGrid = document.getElementById("photos-grid");
const videosGrid = document.getElementById("videos-grid");
const galleryToggleButtons = document.querySelectorAll(".gallery-toggle-btn");
const galleryTitle = document.getElementById("gallery-title");
const scrollBtn = document.getElementById("scroll-btn");
const musicBtn = document.getElementById("music-btn");
const bgMusic = document.getElementById("bg-music");
const musicIcon = musicBtn.querySelector(".music-icon");
const heroSparkleContainer = document.querySelector(".hero-sparkle-container");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxVideo = document.getElementById("lightbox-video");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.getElementById("lightbox-close");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;
let lastScrollY = window.scrollY;

// --- Helper Functions ---
function getAssetPath(filename) {
  return `./${filename}`;
}

// --- Page & UI Logic ---
function hideLoader() {
  loader.classList.add("hidden");
  mainContent.style.display = "block";
}

function handleScroll() {
  if (window.scrollY > lastScrollY && window.scrollY > 100) {
    siteHeader.classList.add("hide");
  } else {
    siteHeader.classList.remove("hide");
  }
  lastScrollY = window.scrollY;
}

function toggleMusic() {
  if (bgMusic.paused) {
    bgMusic.play().catch(() => {});
    musicBtn.classList.add("playing");
    musicIcon.textContent = "🔊";
    localStorage.setItem("memory_playMusic", "true");
  } else {
    bgMusic.pause();
    musicBtn.classList.remove("playing");
    musicIcon.textContent = "🎵";
    localStorage.setItem("memory_playMusic", "false");
  }
}

function createHeroSparkle() {
  const sparkle = document.createElement("div");
  sparkle.classList.add("hero-sparkle");
  sparkle.style.width = sparkle.style.height = `${Math.random() * 3 + 1}px`;
  sparkle.style.left = `${Math.random() * 100}vw`;
  sparkle.style.top = `${100 + Math.random() * 20}vh`;
  sparkle.style.animationDuration = `${10 + Math.random() * 8}s`;
  sparkle.style.animationDelay = `${Math.random() * 5}s`;
  heroSparkleContainer.appendChild(sparkle);

  sparkle.addEventListener("animationend", () => {
    sparkle.remove();
  });
}

function switchGallery(targetId) {
  const grids = document.querySelectorAll(".gallery-grid");
  grids.forEach((grid) => grid.classList.remove("active"));
  document.getElementById(targetId).classList.add("active");

  galleryToggleButtons.forEach((btn) => btn.classList.remove("active"));
  document.querySelector(`[data-target="${targetId}"]`).classList.add("active");

  if (targetId === "photos-grid") {
    galleryTitle.textContent = "Photo Gallery";
  } else {
    galleryTitle.textContent = "Video Gallery";
  }
}

// --- Gallery & Lightbox Logic ---
function createGalleryItem(item) {
  const itemEl = document.createElement("div");
  itemEl.className = "gallery-item";
  itemEl.setAttribute("tabindex", "0");

  const mediaEl = document.createElement(
    item.type === "image" ? "img" : "video"
  );
  mediaEl.src = getAssetPath(item.src);
  mediaEl.alt = item.caption;
  mediaEl.loading = "lazy";

  if (item.type === "video") {
    mediaEl.muted = true;
    mediaEl.playsInline = true;
    mediaEl.preload = "metadata";

    const videoIndicator = document.createElement("span");
    videoIndicator.className = "video-indicator";
    videoIndicator.textContent = "VIDEO";
    itemEl.appendChild(videoIndicator);
  }

  itemEl.appendChild(mediaEl);

  itemEl.addEventListener("click", () => {
    const allItems = siteConfig.galleryItems;
    const currentItem = siteConfig.galleryItems.find((i) => i.src === item.src);
    currentIndex = allItems.indexOf(currentItem);
    openLightbox(currentItem);
  });

  itemEl.dataset.item = JSON.stringify(item);

  return itemEl;
}

function loadGallery() {
  const photos = siteConfig.galleryItems.filter(
    (item) => item.type === "image"
  );
  const videos = siteConfig.galleryItems.filter(
    (item) => item.type === "video"
  );

  photos.forEach((item) => {
    const galleryItem = createGalleryItem(item);
    photosGrid.appendChild(galleryItem);
  });

  videos.forEach((item) => {
    const galleryItem = createGalleryItem(item);
    videosGrid.appendChild(galleryItem);
  });
}

function openLightbox(item) {
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  if (item.type === "image") {
    lightboxVideo.style.display = "none";
    lightboxVideo.pause();
    lightboxImg.style.display = "block";
    lightboxImg.src = getAssetPath(item.src);
    lightboxImg.alt = item.caption;
  } else {
    lightboxImg.style.display = "none";
    lightboxVideo.style.display = "block";
    lightboxVideo.src = getAssetPath(item.src);
    lightboxVideo.play().catch(() => {});
  }

  lightboxCaption.textContent = item.caption;
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  lightboxVideo.pause();
  lightboxVideo.src = "";
  lightboxImg.src = "";
  lightboxCaption.textContent = "";
}

function navigateLightbox(direction) {
  const allItems = siteConfig.galleryItems;
  currentIndex = (currentIndex + direction + allItems.length) % allItems.length;
  openLightbox(allItems[currentIndex]);
}

// --- Event Listeners ---
document.addEventListener("DOMContentLoaded", () => {
  loadGallery();

  if (window.innerWidth <= 768) {
    switchGallery("photos-grid"); // Default to photos on mobile
  }

  setTimeout(hideLoader, 1000);

  if (localStorage.getItem("memory_playMusic") === "true") {
    bgMusic.play().catch(() => {});
    musicBtn.classList.add("playing");
    musicIcon.textContent = "🔊";
  }

  setInterval(createHeroSparkle, 500);
});

galleryToggleButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const targetId = e.target.dataset.target;
    switchGallery(targetId);
  });
});

musicBtn.addEventListener("click", toggleMusic);

scrollBtn.addEventListener("click", () => {
  document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
});

window.addEventListener("scroll", handleScroll);

// Lightbox event listeners
lightboxClose.addEventListener("click", closeLightbox);
prevBtn.addEventListener("click", () => navigateLightbox(-1));
nextBtn.addEventListener("click", () => navigateLightbox(1));
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target.classList.contains("lightbox-stage")) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("is-open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") navigateLightbox(-1);
  if (e.key === "ArrowRight") navigateLightbox(1);
});
