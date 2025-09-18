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
};

// ------------------ State ------------------
const allItems = [...siteConfig.photos, ...siteConfig.videos];
let currentIndex = 0;
let lastScrollY = window.scrollY;
let sparklesInterval;

// ------------------ Helpers ------------------

// Utility function to get the asset path.
const getAssetPath = (file) => `./${file}`;

// Hides the page loader once all page resources have loaded.
const hideLoader = () => {
  elements.loader.classList.add("hidden");
};

// ------------------ UI: Header Scroll ------------------

// Handles header visibility on scroll to improve user experience.
function handleScroll() {
  if (window.scrollY > lastScrollY && window.scrollY > 100) {
    elements.siteHeader.classList.add("hide");
  } else {
    elements.siteHeader.classList.remove("hide");
  }
  lastScrollY = window.scrollY;
}

// ------------------ UI: Music ------------------

// Toggles background music playback and updates button state.
function toggleMusic() {
  if (elements.bgMusic.paused) {
    elements.bgMusic
      .play()
      .catch((e) => console.error("Autoplay was prevented:", e));
    elements.musicBtn.classList.add("playing");
    elements.musicIcon.textContent = "🔊";
    localStorage.setItem("playMusic", "true");
  } else {
    elements.bgMusic.pause();
    elements.musicBtn.classList.remove("playing");
    elements.musicIcon.textContent = "🎵";
    localStorage.setItem("playMusic", "false");
  }
}

// ------------------ UI: Sparkles ------------------

// Creates a single floating sparkle effect in the hero section.
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

  // Clean up sparkle element after its animation ends.
  sparkle.addEventListener("animationend", () => sparkle.remove());
}

// ------------------ UI: Gallery ------------------

// Creates and returns a single gallery item element.
function createGalleryItem(item, index) {
  const itemEl = document.createElement("div");
  itemEl.className = "gallery-item";

  let mediaEl;
  if (item.type === "image") {
    mediaEl = document.createElement("img");
    mediaEl.src = getAssetPath(item.src);
    mediaEl.alt = item.caption;
  } else {
    mediaEl = document.createElement("video");
    mediaEl.src = getAssetPath(item.src);
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

// Loads all gallery items into the DOM.
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
}

// ------------------ UI: Lightbox ------------------

// Opens the lightbox and displays the selected media item.
function openLightbox(item) {
  elements.lightbox.classList.add("is-open");
  document.body.style.overflow = "hidden";

  if (item.type === "image") {
    elements.lightboxVideo.style.display = "none";
    elements.lightboxVideo.pause();
    elements.lightboxVideo.src = "";
    elements.lightboxImg.style.display = "block";
    elements.lightboxImg.src = getAssetPath(item.src);
  } else {
    elements.lightboxImg.style.display = "none";
    elements.lightboxImg.src = "";
    elements.lightboxVideo.style.display = "block";
    elements.lightboxVideo.src = getAssetPath(item.src);
    elements.lightboxVideo
      .play()
      .catch((e) => console.error("Autoplay was prevented:", e));
  }

  elements.lightboxCaption.textContent = item.caption;
}

// Closes the lightbox and resets the body overflow.
function closeLightbox() {
  elements.lightbox.classList.remove("is-open");
  document.body.style.overflow = "";
  elements.lightboxVideo.pause();
  elements.lightboxVideo.src = "";
  elements.lightboxImg.src = "";
}

// Navigates to the next or previous item in the lightbox.
function navigateLightbox(dir) {
  currentIndex = (currentIndex + dir + allItems.length) % allItems.length;
  openLightbox(allItems[currentIndex]);
}

// ------------------ UI: Mobile Gallery Switch ------------------

// Toggles between photo and video galleries on mobile.
function switchGallery(targetId) {
  elements.photosGrid.classList.remove("active");
  elements.videosGrid.classList.remove("active");
  document.getElementById(targetId).classList.add("active");

  elements.galleryToggleButtons.forEach((b) => b.classList.remove("active"));
  document.querySelector(`[data-target="${targetId}"]`).classList.add("active");
}

// ------------------ Event Listeners ------------------

// Initializes all event listeners for the page.
function initEvents() {
  // Gallery toggle buttons
  elements.galleryToggleButtons.forEach((btn) => {
    btn.addEventListener("click", (e) =>
      switchGallery(e.target.dataset.target)
    );
  });

  // Music toggle
  elements.musicBtn.addEventListener("click", toggleMusic);

  // Scroll button
  elements.scrollBtn.addEventListener("click", () => {
    document
      .getElementById("photos-gallery")
      .scrollIntoView({ behavior: "smooth" });
  });

  // Header hide on scroll
  window.addEventListener("scroll", handleScroll);

  // Lightbox controls
  elements.lightboxClose.addEventListener("click", closeLightbox);
  elements.prevBtn.addEventListener("click", () => navigateLightbox(-1));
  elements.nextBtn.addEventListener("click", () => navigateLightbox(1));

  // Close lightbox when clicking outside the media.
  elements.lightbox.addEventListener("click", (e) => {
    if (e.target === elements.lightbox) closeLightbox();
  });

  // Keyboard navigation and closing.
  document.addEventListener("keydown", (e) => {
    if (!elements.lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
  });

  // Initial music state check
  if (localStorage.getItem("playMusic") === "true") {
    elements.bgMusic
      .play()
      .catch((e) => console.error("Autoplay was prevented:", e));
    elements.musicBtn.classList.add("playing");
    elements.musicIcon.textContent = "🔊";
  }

  // Initial mobile view check
  if (window.innerWidth <= 768) {
    switchGallery("photos-grid");
  }
}

// ------------------ Initialization ------------------

// The main entry point for the application.
document.addEventListener("DOMContentLoaded", () => {
  loadGallery();
  // Hide the loader only after all page assets have loaded
  window.addEventListener("load", hideLoader);
  initEvents();

  // Start the sparkle effect animation
  sparklesInterval = setInterval(createHeroSparkle, 500);
});
