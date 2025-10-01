// =================================================================
// Enhanced & Refactored JavaScript (Videos First)
// =================================================================

// ------------------ Configuration ------------------
const siteConfig = {
  // Array of objects for photos and videos.
  // NOTE: Replace image/video files (e.g., "23.jpg") with your actual file names.
  photos: [
    { src: "23.jpg", caption: "❤️ Our first trip together!", type: "image" },
    { src: "25.jpg", caption: "❤️", type: "image" },
    { src: "17.jpg", caption: "❤️", type: "image" },
    { src: "g.jpg", caption: "❤️", type: "image" },
    { src: "70.jpg", caption: "❤️", type: "image" },
    { src: "71.jpg", caption: "❤️", type: "image" },
    { src: "72.jpg", caption: "❤️", type: "image" },
    { src: "51.jpg", caption: "❤️", type: "image" },
    { src: "26.jpg", caption: "❤️", type: "image" },
    { src: "33.jpg", caption: "❤️", type: "image" },
    { src: "e.jpg", caption: "❤️", type: "image" },
    { src: "f.jpg", caption: "❤️", type: "image" },
    { src: "73.jpg", caption: "❤️", type: "image" },
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
    { src: "67.mp4", poster: "67.jpg", caption: "❤️", type: "video" },
    { src: "84.mp4", poster: "67.jpg", caption: "❤️", type: "video" },
    { src: "68.mp4", poster: "67.jpg", caption: "❤️", type: "video" },
    { src: "a.mp4", poster: "a.jpg", caption: "❤️", type: "video" },
    { src: "b.mp4", poster: "b.jpg", caption: "❤️", type: "video" },
    { src: "69.mp4", poster: "c.jpg", caption: "❤️", type: "video" },
    { src: "82.mp4", poster: "29.jpg", caption: "❤️", type: "video" },
    { src: "83.mp4", poster: "29.jpg", caption: "❤️", type: "video" },
    { src: "81.mp4", poster: "29.jpg", caption: "❤️", type: "video" },
    { src: "79.mp4", poster: "29.jpg", caption: "❤️", type: "video" },
    { src: "80.mp4", poster: "29.jpg", caption: "❤️", type: "video" },
    { src: "75.mp4", poster: "29.jpg", caption: "❤️", type: "video" },
    { src: "78.mp4", poster: "29.jpg", caption: "❤️", type: "video" },
    { src: "85.mp4", poster: "29.jpg", caption: "❤️", type: "video" },
    { src: "74.mp4", poster: "29.jpg", caption: "❤️", type: "video" },
    { src: "c.mp4", poster: "c.jpg", caption: "❤️", type: "video" },
    { src: "d.mp4", poster: "d.jpg", caption: "❤️", type: "video" },
    { src: "28.mp4", poster: "28.jpg", caption: "❤️", type: "video" },
    { src: "29.mp4", poster: "29.jpg", caption: "❤️", type: "video" },
    { src: "76.mp4", poster: "29.jpg", caption: "❤️", type: "video" },
    { src: "30.mp4", poster: "30.jpg", caption: "❤️", type: "video" },
    { src: "32.mp4", poster: "32.jpg", caption: "❤️", type: "video" },
    { src: "20.mp4", poster: "20.jpg", caption: "❤️", type: "video" },
    { src: "49.mp4", poster: "49.jpg", caption: "❤️", type: "video" },
    { src: "77.mp4", poster: "29.jpg", caption: "❤️", type: "video" },
    { src: "1.mp4", poster: "1.jpg", caption: "❤️", type: "video" },
    { src: "2.mp4", poster: "2.jpg", caption: "❤️", type: "video" },
    { src: "3.mp4", poster: "3.jpg", caption: "❤️", type: "video" },
    { src: "45.mp4", poster: "45.jpg", caption: "❤️", type: "video" },
    { src: "47.mp4", poster: "47.jpg", caption: "❤️", type: "video" },
    { src: "48.mp4", poster: "48.jpg", caption: "❤️", type: "video" },
    { src: "50.mp4", poster: "50.jpg", caption: "❤️", type: "video" },
    { src: "52.mp4", poster: "52.jpg", caption: "❤️", type: "video" },
    { src: "53.mp4", poster: "53.jpg", caption: "❤️", type: "video" },
    { src: "55.mp4", poster: "55.jpg", caption: "❤️", type: "video" },
    { src: "57.mp4", poster: "57.jpg", caption: "❤️", type: "video" },
    { src: "58.mp4", poster: "58.jpg", caption: "❤️", type: "video" },
    { src: "60.mp4", poster: "60.jpg", caption: "❤️", type: "video" },
    { src: "62.mp4", poster: "62.jpg", caption: "❤️", type: "video" },
    { src: "63.mp4", poster: "63.jpg", caption: "❤️", type: "video" },
    { src: "64.mp4", poster: "64.jpg", caption: "❤️", type: "video" },
    { src: "66.mp4", poster: "66.jpg", caption: "❤️", type: "video" },
    { src: "35.mp4", poster: "35.jpg", caption: "❤️", type: "video" },
    { src: "38.mp4", poster: "38.jpg", caption: "❤️", type: "video" },
    { src: "39.mp4", poster: "39.jpg", caption: "❤️", type: "video" },
    { src: "44.mp4", poster: "44.jpg", caption: "❤️", type: "video" },
  ],
  heroText: "Our Memory Lane",
  musicFile: "iris.mp3", // Standardized music file name
};

// ------------------ DOM Element Cache ------------------
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
  // NEW: Scroll-to-top button
  backToTopBtn:
    document.getElementById("back-to-top-btn") ||
    document.createElement("button"),
};

// ------------------ State ------------------
const state = {
  isMusicPlaying: localStorage.getItem("playMusic") === "true",
  lastScrollY: window.scrollY,
  sparklesInterval: null,
  currentLightboxIndex: 0,
  // Start with videos list as the default
  currentLightboxItems: siteConfig.videos,
  reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  // NEW: Hero zoom state
  isHeroVisible: true,
};

// ------------------ Utility Functions ------------------

/**
 * NEW: Debounce function to limit the rate of function calls.
 * @param {function} func - The function to debounce.
 * @param {number} delay - The delay in milliseconds.
 */
const debounce = (func, delay = 50) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

// Simplified asset path resolver
const getAssetPath = (file) => `./${file}`;

// ------------------ Asset Management & Caching ------------------

function preCacheAssets() {
  const assetsToCache = [
    "14.jpg", // Hero image
    ...siteConfig.photos.map((p) => p.src),
    ...siteConfig.videos.map((v) => v.poster),
    siteConfig.musicFile,
  ];

  if ("caches" in window) {
    caches.open("our-memories-cache-v1").then((cache) => {
      cache
        .addAll(assetsToCache.map(getAssetPath))
        .catch((err) => console.error("Failed to pre-cache assets:", err));
    });
  }

  // Preload hero image for faster display
  const heroImg = new Image();
  heroImg.src = getAssetPath("14.jpg");
  heroImg.onload = () => {
    elements.heroBgImage.style.backgroundImage = `url(${getAssetPath(
      "14.jpg"
    )})`;
  };
}

// ------------------ UI: Loading & Hero Section ------------------

function hideLoader() {
  if (elements.loader) {
    elements.loader.classList.add("hidden");
    // NEW: Ensure music starts immediately upon interaction if saved state is true
    if (state.isMusicPlaying) {
      // Attach the play attempt to the next *guaranteed* user interaction
      document.body.addEventListener("click", toggleMusic, { once: true });
    }
  }
}

// ENHANCED Title Typewriter Function with more elegant reset
function typeHeroTitle(text, speed = 80) {
  if (state.reducedMotion) {
    elements.heroTitle.textContent = text;
    return;
  }

  let i = 0;
  elements.heroTitle.textContent = "";
  const timer = setInterval(() => {
    if (i < text.length) {
      elements.heroTitle.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

// NEW: Advanced Parallax and Header Visibility
function handleScrollEffects() {
  const currentScrollY = window.scrollY;
  const heroHeight = window.innerHeight;

  // 1. Header Visibility
  if (currentScrollY > state.lastScrollY && currentScrollY > 100) {
    elements.siteHeader.classList.add("hide");
  } else {
    elements.siteHeader.classList.remove("hide");
  }
  state.lastScrollY = currentScrollY;

  // 2. Parallax
  const parallaxSpeed =
    parseFloat(elements.heroBgImage.dataset.parallaxSpeed) || 0.5;
  if (elements.heroBgImage) {
    elements.heroBgImage.style.transform = `translateY(${
      currentScrollY * parallaxSpeed
    }px) scale(1.05)`;
  }

  // 3. Back to Top Button Visibility
  if (currentScrollY > heroHeight * 0.7) {
    elements.backToTopBtn.style.opacity = "1";
    elements.backToTopBtn.style.visibility = "visible";
  } else {
    elements.backToTopBtn.style.opacity = "0";
    elements.backToTopBtn.style.visibility = "hidden";
  }

  // 4. Hero Visibility State (for use in handleHeroZoom)
  state.isHeroVisible = currentScrollY < heroHeight;
}

// NEW: Hero Image Zoom on Mouse Move (only active when hero is visible)
function handleHeroZoom(e) {
  if (window.innerWidth <= 1024 || state.reducedMotion || !state.isHeroVisible)
    return;

  // Calculate normalized coordinates (-0.5 to 0.5) relative to the viewport
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;

  // Apply a subtle rotation and pan
  const rotateX = y * 2; // Subtle vertical tilt
  const rotateY = x * -2; // Subtle horizontal tilt
  const translateX = x * 10;
  const translateY = y * 10;

  // Apply the transformation
  elements.heroBgImage.style.transform = `
        translateY(${window.scrollY * 0.5}px) 
        scale(1.08) 
        translateX(${translateX}px) 
        translateY(${translateY}px)
    `;
  elements.heroBgImage.style.setProperty("--rotateX", `${rotateX}deg`);
  elements.heroBgImage.style.setProperty("--rotateY", `${rotateY}deg`);

  // Ensure the CSS uses the custom properties for the subtle 3D effect:
  /*
    .hero-bg-image {
        ...
        transform: scale(1.05); 
        transition: transform 3s ease-out, filter var(--transition-slow); 
        transform-origin: center center;
        perspective: 1000px;
        transform: translateY(calc(var(--scroll-y) * var(--parallax-speed, 0.5) * 1px)) scale(1.05);
        transform: rotateX(var(--rotateX, 0deg)) rotateY(var(--rotateY, 0deg)); // NEW
    }
    */
}

// ------------------ UI: Header & Music ------------------

function toggleMusic() {
  // This function is now the single source of truth for music state toggling
  const isPlaying =
    !elements.bgMusic.paused && elements.bgMusic.currentTime > 0;

  if (isPlaying) {
    elements.bgMusic.pause();
    elements.musicBtn.classList.remove("playing");
    elements.musicIcon.textContent = "🎵"; // Muted icon
    localStorage.setItem("playMusic", "false");
    state.isMusicPlaying = false;
  } else {
    // Attempt to play only if the music hasn't been blocked (i.e., this is a user-initiated click)
    elements.bgMusic.volume = 0.6; // Set a default volume
    elements.bgMusic
      .play()
      .then(() => {
        elements.musicBtn.classList.add("playing");
        elements.musicIcon.textContent = "🔊"; // Playing icon
        localStorage.setItem("playMusic", "true");
        state.isMusicPlaying = true;
      })
      .catch((e) =>
        console.error("Autoplay was prevented (must be user action):", e)
      );
  }
}

// ------------------ UI: Sparkles ------------------

function createHeroSparkle() {
  const sparkle = document.createElement("div");
  sparkle.className = "hero-sparkle";
  const size = Math.random() * 3 + 1;
  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;
  sparkle.style.left = `${Math.random() * 100}vw`;
  // Start below the viewport
  sparkle.style.top = `${100 + Math.random() * 20}vh`;
  sparkle.style.animationDuration = `${10 + Math.random() * 8}s`;
  sparkle.style.animationDelay = `${Math.random() * 5}s`;
  elements.heroSparkleContainer.appendChild(sparkle);
  sparkle.addEventListener("animationend", () => sparkle.remove());
}

// ------------------ UI: Gallery ------------------

function createGalleryItem(item) {
  const itemEl = document.createElement("div");
  itemEl.className = "gallery-item";
  itemEl.tabIndex = 0;
  itemEl.setAttribute("role", "button");
  itemEl.setAttribute(
    "aria-label",
    `Open ${item.type} with caption: ${item.caption}`
  );
  itemEl.dataset.src = getAssetPath(item.src);
  itemEl.dataset.type = item.type;
  itemEl.dataset.caption = item.caption;

  const mediaEl = document.createElement(
    item.type === "image" ? "img" : "video"
  );

  if (item.type === "image") {
    mediaEl.alt = item.caption;
  } else {
    mediaEl.muted = true;
    mediaEl.loop = true;
    mediaEl.playsInline = true;
    mediaEl.poster = getAssetPath(item.poster);
    const overlay = document.createElement("div");
    overlay.className = "video-overlay";
    itemEl.appendChild(overlay);
  }

  // IntersectionObserver for lazy loading
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetEl = entry.target;
          const media = targetEl.querySelector("img, video");
          if (item.type === "image") {
            media.src = getAssetPath(item.src);
          } else {
            media.src = getAssetPath(item.src);
            // Only attempt to play if media is not already playing
            if (media.paused)
              media.play().catch((e) => console.log("Autoplay failed:", e));
          }
          targetEl.classList.add("loaded");
          observer.unobserve(targetEl);
        } else if (item.type === "video") {
          // Pause videos when they scroll out of view (improves performance)
          const video = entry.target.querySelector("video");
          if (video && !video.paused) {
            video.pause();
          }
        }
      });
    },
    { threshold: 0.1 }
  );

  itemEl.appendChild(mediaEl);
  observer.observe(itemEl);

  return itemEl;
}

function loadGallery() {
  // 1. Load Videos First
  const videosFragment = document.createDocumentFragment();
  siteConfig.videos.forEach((video) => {
    videosFragment.appendChild(createGalleryItem(video));
  });
  elements.videosGrid.appendChild(videosFragment);

  // 2. Load Photos Second
  const photosFragment = document.createDocumentFragment();
  siteConfig.photos.forEach((photo) => {
    photosFragment.appendChild(createGalleryItem(photo));
  });
  elements.photosGrid.appendChild(photosFragment);
}

function getGalleryItemData(target) {
  const itemEl = target.closest(".gallery-item");
  if (!itemEl) return null;
  return {
    src: itemEl.dataset.src,
    type: itemEl.dataset.type,
    caption: itemEl.dataset.caption,
    poster: itemEl.querySelector("video")?.poster,
  };
}

// ------------------ UI: Lightbox ------------------

function openLightbox(itemData, index) {
  state.currentLightboxIndex = index;
  elements.lightbox.classList.add("is-open");
  document.body.style.overflow = "hidden";

  // Hide all media elements first
  elements.lightboxImg.style.display = "none";
  elements.lightboxVideo.style.display = "none";
  elements.lightboxVideo.pause();
  elements.lightboxVideo.currentTime = 0;
  elements.lightboxVideo.src = "";
  elements.lightboxImg.src = "";

  if (itemData.type === "image") {
    elements.lightboxImg.src = itemData.src;
    elements.lightboxImg.alt = itemData.caption;
    elements.lightboxImg.style.display = "block";
  } else if (itemData.type === "video") {
    elements.lightboxVideo.src = itemData.src;
    elements.lightboxVideo.poster = itemData.poster || "";
    elements.lightboxVideo.style.display = "block";
    elements.lightboxVideo.controls = true;
    elements.lightboxVideo.loop = false;
    elements.lightboxVideo
      .play()
      .catch((e) => console.log("Video playback failed:", e));
  }

  elements.lightboxCaption.textContent = itemData.caption;
  elements.lightboxClose.focus();
}

function closeLightbox() {
  elements.lightbox.classList.remove("is-open");
  document.body.style.overflow = "";
  elements.lightboxImg.src = "";
  elements.lightboxVideo.src = "";
  elements.lightboxVideo.pause();
  elements.lightboxVideo.currentTime = 0;
}

function navigateLightbox(direction) {
  let nextIndex = state.currentLightboxIndex + direction;
  const totalItems = state.currentLightboxItems.length;

  // Wrap around logic
  nextIndex = (nextIndex + totalItems) % totalItems;

  state.currentLightboxIndex = nextIndex;
  openLightbox(state.currentLightboxItems[nextIndex], nextIndex);
}

// ------------------ UI: Mobile Gallery Switch ------------------

function switchGallery(targetId) {
  const isVideos = targetId === "videos-grid";

  elements.videosGrid.classList.toggle("active", isVideos);
  elements.photosGrid.classList.toggle("active", !isVideos);

  elements.galleryToggleButtons.forEach((b) =>
    b.classList.toggle("active", b.dataset.target === targetId)
  );

  state.currentLightboxItems = isVideos ? siteConfig.videos : siteConfig.photos;
}

// ------------------ Custom Cursor ------------------

const handleCursor = debounce((e) => {
  if (state.reducedMotion || window.innerWidth <= 768 || !elements.customCursor)
    return;

  // Use requestAnimationFrame for smoother cursor updates
  window.requestAnimationFrame(() => {
    elements.customCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
  });

  const isHoverable = e.target.closest("a, button, .gallery-item");
  elements.customCursor.classList.toggle("hover", isHoverable);
});

// ------------------ Initialization and Events ------------------

function initEvents() {
  // Gallery controls
  elements.galleryToggleButtons.forEach((btn) => {
    btn.addEventListener("click", (e) =>
      switchGallery(e.target.dataset.target)
    );
  });

  // Music control
  elements.musicBtn.addEventListener("click", toggleMusic);

  // NEW: Scroll to Top button
  if (elements.backToTopBtn) {
    elements.backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Smooth scroll to gallery from CTA button
  elements.scrollBtn.addEventListener("click", () => {
    document
      .getElementById("videos-gallery")
      .scrollIntoView({ behavior: "smooth" });
  });

  // Header, Parallax, and Back-to-Top (Debounced for performance)
  window.addEventListener("scroll", debounce(handleScrollEffects, 10));

  // Lightbox controls
  elements.lightboxClose.addEventListener("click", closeLightbox);
  elements.nextBtn.addEventListener("click", () => navigateLightbox(1));
  elements.prevBtn.addEventListener("click", () => navigateLightbox(-1));

  elements.lightbox.addEventListener("click", (e) => {
    if (e.target === elements.lightbox) closeLightbox();
  });

  // Keyboard navigation for lightbox
  document.addEventListener("keydown", (e) => {
    if (!elements.lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") navigateLightbox(1);
    if (e.key === "ArrowLeft") navigateLightbox(-1);
  });

  // Open lightbox from gallery
  document.addEventListener("click", (e) => {
    const itemEl = e.target.closest(".gallery-item");
    if (!itemEl) return;

    const itemSrc = itemEl.dataset.src;
    const itemType = itemEl.dataset.type;

    // Determine the full list of items for navigation
    const currentItems =
      itemType === "video" ? siteConfig.videos : siteConfig.photos;

    // Find the index of the clicked item using the full asset path
    const itemIndex = currentItems.findIndex(
      (item) => getAssetPath(item.src) === itemSrc
    );

    const itemData = getGalleryItemData(e.target);
    if (itemData && itemIndex !== -1) {
      state.currentLightboxItems = currentItems;
      openLightbox(itemData, itemIndex);
    }
  });

  // Initialize gallery display for mobile (now defaulting to videos-grid)
  if (window.innerWidth <= 768) {
    switchGallery("videos-grid");
  }

  // Custom cursor and Hero Zoom for desktop
  if (window.innerWidth > 768) {
    document.addEventListener("mousemove", handleCursor);
    document.body.style.cursor = "none";
    // NEW: Hero Zoom effect
    document
      .querySelector(".hero-section")
      .addEventListener("mousemove", handleHeroZoom);
  }
}

function initialize() {
  preCacheAssets();
  loadGallery();
  window.addEventListener("load", hideLoader);
  initEvents();

  // Type out the main title
  typeHeroTitle(siteConfig.heroText);

  if (!state.reducedMotion) {
    // Start sparkle animation only if motion isn't reduced
    state.sparklesInterval = setInterval(createHeroSparkle, 500);
  }

  // Run initial scroll handler once to set header/parallax state immediately
  handleScrollEffects();
}

document.addEventListener("DOMContentLoaded", initialize);
