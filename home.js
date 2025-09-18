// ------------------ Configuration ------------------
const siteConfig = {
  photos: [
    { src: "23.jpg", caption: "❤️", type: "image" },
    { src: "25.jpg", caption: "❤️", type: "image" },
    { src: "17.jpg", caption: "❤️", type: "image" },
    { src: "g.jpg", caption: "❤️", type: "image" },
    { src: "f.jpg", caption: "❤️", type: "image" },
    { src: "e.jpg", caption: "❤️", type: "image" },
    { src: "51.jpg", caption: "❤️", type: "image" },
    { src: "33.jpg", caption: "❤️", type: "image" },
    { src: "26.jpg", caption: "❤️", type: "image" },
    { src: "27.jpg", caption: "❤️", type: "image" },
    { src: "21.jpg", caption: "❤️", type: "image" },
    { src: "24.jpg", caption: "❤️", type: "image" },
    { src: "42.jpg", caption: "❤️", type: "image" },
    { src: "43.jpg", caption: "❤️", type: "image" },
    { src: "16.jpg", caption: "❤️", type: "image" },
    { src: "19.jpg", caption: "❤️", type: "image" },
    { src: "65.jpg", caption: "❤️", type: "image" },
    { src: "18.jpg", caption: "❤️", type: "image" },
    { src: "61.jpg", caption: "❤️", type: "image" },
    { src: "22.jpg", caption: "❤️", type: "image" },
    { src: "54.jpg", caption: "❤️", type: "image" },
    { src: "59.jpg", caption: "❤️", type: "image" },
    { src: "41.jpg", caption: "❤️", type: "image" },
    { src: "56.jpg", caption: "❤️", type: "image" },
    { src: "4.jpg", caption: "❤️", type: "image" },
    { src: "5.jpg", caption: "❤️", type: "image" },
    { src: "6.jpg", caption: "❤️", type: "image" },
    { src: "7.jpg", caption: "❤️", type: "image" },
    { src: "8.jpg", caption: "❤️", type: "image" },
    { src: "9.jpg", caption: "❤️", type: "image" },
    { src: "10.jpg", caption: "❤️", type: "image" },
    { src: "12.jpg", caption: "❤️", type: "image" },
    { src: "13.jpg", caption: "❤️", type: "image" },
    { src: "14.jpg", caption: "❤️", type: "image" },
    { src: "profile.jpg", caption: "❤️", type: "image" },
    { src: "46.jpg", caption: "❤️", type: "image" },
    { src: "31.jpg", caption: "❤️", type: "image" },
    { src: "36.jpg", caption: "❤️", type: "image" },
    { src: "40.jpg", caption: "❤️", type: "image" },
    { src: "11.jpg", caption: "❤️", type: "image" },
  ],
  videos: [
    { src: "a.mp4", caption: "❤️", type: "video" },
    { src: "b.mp4", caption: "❤️", type: "video" },
    { src: "c.mp4", caption: "❤️", type: "video" },
    { src: "d.mp4", caption: "❤️", type: "video" },
    { src: "28.mp4", caption: "❤️", type: "video" },
    { src: "29.mp4", caption: "❤️", type: "video" },
    { src: "30.mp4", caption: "❤️", type: "video" },
    { src: "32.mp4", caption: "❤️", type: "video" },
    { src: "20.mp4", caption: "❤️", type: "video" },
    { src: "49.mp4", caption: "❤️", type: "video" },
    { src: "1.mp4", caption: "❤️", type: "video" },
    { src: "2.mp4", caption: "❤️", type: "video" },
    { src: "3.mp4", caption: "❤️", type: "video" },
    { src: "45.mp4", caption: "❤️", type: "video" },
    { src: "47.mp4", caption: "❤️", type: "video" },
    { src: "48.mp4", caption: "❤️", type: "video" },
    { src: "50.mp4", caption: "❤️", type: "video" },
    { src: "52.mp4", caption: "❤️", type: "video" },
    { src: "53.mp4", caption: "❤️", type: "video" },
    { src: "55.mp4", caption: "❤️", type: "video" },
    { src: "57.mp4", caption: "❤️", type: "video" },
    { src: "58.mp4", caption: "❤️", type: "video" },
    { src: "60.mp4", caption: "❤️", type: "video" },
    { src: "62.mp4", caption: "❤️", type: "video" },
    { src: "63.mp4", caption: "❤️", type: "video" },
    { src: "64.mp4", caption: "❤️", type: "video" },
    { src: "66.mp4", caption: "❤️", type: "video" },
    { src: "35.mp4", caption: "❤️", type: "video" },
    { src: "38.mp4", caption: "❤️", type: "video" },
    { src: "39.mp4", caption: "❤️", type: "video" },
    { src: "44.mp4", caption: "❤️", type: "video" },
  ],
};

// ------------------ DOM Elements ------------------
const elements = {
  loader: document.getElementById("loader"),
  siteHeader: document.getElementById("site-header"),
  photosGrid: document.getElementById("photos-grid"),
  videosGrid: document.getElementById("videos-grid"),
  galleryToggleButtons: document.querySelectorAll(".gallery-toggle-btn"),
  scrollBtn: document.getElementById("scroll-btn"),
  musicBtn: document.getElementById("music-btn"),
  bgMusic: document.getElementById("bg-music"),
  musicIcon: document.getElementById("music-icon"),
  heroSparkleContainer: document.querySelector(".hero-sparkle-container"),
  lightbox: document.getElementById("lightbox"),
  lightboxImg: document.getElementById("lightbox-img"),
  lightboxVideo: document.getElementById("lightbox-video"),
  lightboxCaption: document.getElementById("lightbox-caption"),
  lightboxClose: document.getElementById("lightbox-close"),
  prevBtn: document.getElementById("prev-btn"),
  nextBtn: document.getElementById("next-btn"),
  heroTitle: document.getElementById("hero-title"),
  heroBgImage: document.querySelector(".hero-bg-image"),
  customCursor: document.getElementById("custom-cursor"),
};

// ------------------ State ------------------
const allItems = [...siteConfig.photos, ...siteConfig.videos];
let currentIndex = 0;
let lastScrollY = window.scrollY;
let sparklesInterval;
let isMusicPlaying = localStorage.getItem("playMusic") === "true";

// ------------------ Helpers ------------------
const getAssetPath = (file) => `./${file}`;

// ------------------ Core Functions ------------------

function hideLoader() {
  if (elements.loader) {
    elements.loader.classList.add("hidden");
  }
}

function typeHeroTitle(text, speed = 100) {
  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      elements.heroTitle.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

function handleParallax() {
  const scrollY = window.scrollY;
  const parallaxSpeed = parseFloat(elements.heroBgImage.dataset.parallaxSpeed);
  elements.heroBgImage.style.transform = `translateY(${
    scrollY * parallaxSpeed
  }px) scale(1.1)`;
}

// ------------------ UI: Header & Music ------------------

function handleHeaderScroll() {
  const currentScrollY = window.scrollY;
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    elements.siteHeader.classList.add("hide");
  } else {
    elements.siteHeader.classList.remove("hide");
  }
  lastScrollY = currentScrollY;
}

function toggleMusic() {
  if (elements.bgMusic.paused) {
    elements.bgMusic
      .play()
      .then(() => {
        elements.musicBtn.classList.add("playing");
        elements.musicIcon.textContent = "🔊";
        localStorage.setItem("playMusic", "true");
        isMusicPlaying = true;
      })
      .catch((e) => console.error("Autoplay was prevented:", e));
  } else {
    elements.bgMusic.pause();
    elements.musicBtn.classList.remove("playing");
    elements.musicIcon.textContent = "🎵";
    localStorage.setItem("playMusic", "false");
    isMusicPlaying = false;
  }
}

// ------------------ UI: Sparkles ------------------

function createHeroSparkle() {
  const sparkle = document.createElement("div");
  sparkle.className = "hero-sparkle";
  sparkle.style.width = `${Math.random() * 3 + 1}px`;
  sparkle.style.height = sparkle.style.width;
  sparkle.style.left = `${Math.random() * 100}vw`;
  sparkle.style.top = `${100 + Math.random() * 20}vh`;
  sparkle.style.animationDuration = `${10 + Math.random() * 8}s`;
  sparkle.style.animationDelay = `${Math.random() * 5}s`;
  elements.heroSparkleContainer.appendChild(sparkle);

  sparkle.addEventListener("animationend", () => sparkle.remove());
}

// ------------------ UI: Gallery & Lazy Loading ------------------

function createGalleryItem(item, index) {
  const itemEl = document.createElement("div");
  itemEl.className = "gallery-item";
  itemEl.tabIndex = 0; // Make it focusable for keyboard navigation
  itemEl.setAttribute("role", "button");
  itemEl.setAttribute(
    "aria-label",
    `Open ${item.type} with caption: ${item.caption}`
  );

  let mediaEl;
  if (item.type === "image") {
    mediaEl = new Image();
    mediaEl.dataset.src = getAssetPath(item.src);
    mediaEl.alt = item.caption;
    mediaEl.loading = "lazy";
  } else {
    mediaEl = document.createElement("video");
    mediaEl.dataset.src = getAssetPath(item.src);
    mediaEl.muted = true;
    mediaEl.playsInline = true;
    mediaEl.preload = "metadata";

    const overlay = document.createElement("div");
    overlay.className = "video-overlay";
    itemEl.appendChild(overlay);
  }

  itemEl.appendChild(mediaEl);

  itemEl.addEventListener("click", () => {
    currentIndex = index;
    openLightbox(allItems[currentIndex]);
  });

  return itemEl;
}

function loadGallery() {
  const photosFragment = document.createDocumentFragment();
  const videosFragment = document.createDocumentFragment();

  allItems.forEach((item, i) => {
    const el = createGalleryItem(item, i);
    if (item.type === "image") {
      photosFragment.appendChild(el);
    } else {
      videosFragment.appendChild(el);
    }
  });

  elements.photosGrid.appendChild(photosFragment);
  elements.videosGrid.appendChild(videosFragment);

  enableLazyLoading();
}

function enableLazyLoading() {
  const lazyElements = document.querySelectorAll("[data-src]");
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const media = entry.target;
          media.src = media.dataset.src;
          media.onload = () => media.classList.add("loaded");
          media.onloadeddata = () => media.classList.add("loaded");
          obs.unobserve(media);
        }
      });
    },
    { rootMargin: "100px" }
  );

  lazyElements.forEach((el) => observer.observe(el));
}

// ------------------ UI: Lightbox ------------------

function openLightbox(item) {
  elements.lightbox.classList.add("is-open");
  document.body.style.overflow = "hidden";
  elements.lightbox.focus(); // Focus the lightbox for accessibility

  elements.lightboxImg.style.display = "none";
  elements.lightboxVideo.style.display = "none";
  elements.lightboxVideo.pause();
  elements.lightboxVideo.src = "";
  elements.lightboxImg.src = "";

  if (item.type === "image") {
    elements.lightboxImg.style.display = "block";
    elements.lightboxImg.src = getAssetPath(item.src);
  } else {
    elements.lightboxVideo.style.display = "block";
    elements.lightboxVideo.src = getAssetPath(item.src);
    elements.lightboxVideo.load();
    elements.lightboxVideo
      .play()
      .catch((e) => console.error("Autoplay was prevented:", e));
  }

  elements.lightboxCaption.textContent = item.caption;
}

function closeLightbox() {
  elements.lightbox.classList.remove("is-open");
  document.body.style.overflow = "";
  elements.lightboxVideo.pause();
  elements.lightboxVideo.src = "";
  elements.lightboxImg.src = "";
  // Return focus to the element that opened the lightbox if possible
  document.activeElement.blur();
}

function navigateLightbox(dir) {
  currentIndex = (currentIndex + dir + allItems.length) % allItems.length;
  openLightbox(allItems[currentIndex]);
}

// ------------------ UI: Mobile Gallery Switch ------------------

function switchGallery(targetId) {
  elements.photosGrid.classList.remove("active");
  elements.videosGrid.classList.remove("active");
  document.getElementById(targetId).classList.add("active");

  elements.galleryToggleButtons.forEach((b) => b.classList.remove("active"));
  document.querySelector(`[data-target="${targetId}"]`).classList.add("active");
}

// ------------------ Custom Cursor ------------------

function handleCursor(e) {
  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    window.innerWidth <= 768
  ) {
    return;
  }
  elements.customCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
  const target = e.target;
  const isHoverable =
    target.closest("a, button, .gallery-item") ||
    window.getComputedStyle(target).cursor === "pointer";
  if (isHoverable) {
    elements.customCursor.classList.add("hover");
  } else {
    elements.customCursor.classList.remove("hover");
  }
}

// ------------------ Event Listeners & Init ------------------

function initEvents() {
  elements.galleryToggleButtons.forEach((btn) => {
    btn.addEventListener("click", (e) =>
      switchGallery(e.target.dataset.target)
    );
  });

  elements.musicBtn.addEventListener("click", toggleMusic);

  elements.scrollBtn.addEventListener("click", () => {
    document
      .getElementById("photos-gallery")
      .scrollIntoView({ behavior: "smooth" });
  });

  window.addEventListener("scroll", handleHeaderScroll);
  window.addEventListener("scroll", handleParallax);

  elements.lightboxClose.addEventListener("click", closeLightbox);
  elements.prevBtn.addEventListener("click", () => navigateLightbox(-1));
  elements.nextBtn.addEventListener("click", () => navigateLightbox(1));

  elements.lightbox.addEventListener("click", (e) => {
    if (e.target === elements.lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!elements.lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
  });

  if (isMusicPlaying) {
    elements.bgMusic
      .play()
      .catch((e) => console.error("Autoplay was prevented:", e));
    elements.musicBtn.classList.add("playing");
    elements.musicIcon.textContent = "🔊";
  }

  // Initial gallery view for mobile
  if (window.innerWidth <= 768) {
    switchGallery("photos-grid");
  } else {
    elements.photosGrid.classList.add("active");
    elements.videosGrid.classList.add("active");
  }

  // Custom cursor
  if (window.innerWidth > 768) {
    document.addEventListener("mousemove", handleCursor);
    document.body.style.cursor = "none";
  }
}

function initialize() {
  loadGallery();
  window.addEventListener("load", hideLoader);
  initEvents();
  typeHeroTitle("Our Memories");
  sparklesInterval = setInterval(createHeroSparkle, 500);
}

document.addEventListener("DOMContentLoaded", initialize);
