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
};

// ------------------ State ------------------
const state = {
  isMusicPlaying: localStorage.getItem("playMusic") === "true",
  lastScrollY: window.scrollY,
  sparklesInterval: null,
  currentLightboxIndex: 0,
  // Initialize currentLightboxItems to videos since they will be displayed first
  currentLightboxItems: siteConfig.videos,
  reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
};

// ------------------ Asset Management & Caching ------------------
function getAssetPath(file) {
  // Ensures the path is correct, assuming assets are in the same folder as home.html
  return file.startsWith("./") ? file : `./${file}`;
}

function preCacheAssets() {
  // Note: The audio file is assumed to be 'iris.mp3' based on the HTML
  const assetsToCache = [
    "14.jpg", // Hero image
    ...siteConfig.photos.map((p) => p.src),
    ...siteConfig.videos.map((v) => v.poster),
    "iris.mp3", // Audio asset
  ];

  if ("caches" in window) {
    caches.open("our-memories-cache-v1").then((cache) => {
      cache
        .addAll(assetsToCache.map(getAssetPath))
        .then(() => {
          console.log("Assets pre-cached successfully! 💖");
        })
        .catch((err) => {
          console.error("Failed to pre-cache assets:", err);
        });
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
  }
}

// Enhanced Title Typewriter Function
function typeHeroTitle(text, speed = 80) {
  if (state.reducedMotion) {
    elements.heroTitle.textContent = text;
    return;
  }

  let i = 0;
  elements.heroTitle.textContent = ""; // Clear content
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
  // Parallax speed from data-attribute (0.5)
  const parallaxSpeed =
    parseFloat(elements.heroBgImage.dataset.parallaxSpeed) || 0.5;
  if (elements.heroBgImage) {
    // Moves the background up slower than the foreground
    elements.heroBgImage.style.transform = `translateY(${
      scrollY * parallaxSpeed
    }px) scale(1.1)`;
  }
}

// ------------------ UI: Header & Music ------------------
function handleHeaderScroll() {
  const currentScrollY = window.scrollY;
  // Hide header when scrolling down past 100px
  if (currentScrollY > state.lastScrollY && currentScrollY > 100) {
    elements.siteHeader.classList.add("hide");
  } else {
    elements.siteHeader.classList.remove("hide");
  }
  state.lastScrollY = currentScrollY;
}

function toggleMusic() {
  const isPlaying = !elements.bgMusic.paused;
  if (isPlaying) {
    elements.bgMusic.pause();
    elements.musicBtn.classList.remove("playing");
    elements.musicIcon.textContent = "🎵"; // Muted icon
    localStorage.setItem("playMusic", "false");
    state.isMusicPlaying = false;
  } else {
    elements.bgMusic
      .play()
      .then(() => {
        elements.musicBtn.classList.add("playing");
        elements.musicIcon.textContent = "🔊"; // Playing icon
        localStorage.setItem("playMusic", "true");
        state.isMusicPlaying = true;
      })
      .catch((e) => console.error("Autoplay was prevented:", e));
  }
}

// ------------------ UI: Sparkles ------------------
function createHeroSparkle() {
  const sparkle = document.createElement("div");
  sparkle.className = "hero-sparkle";
  const size = Math.random() * 3 + 1; // 1px to 4px
  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;
  sparkle.style.left = `${Math.random() * 100}vw`;
  // Start below the viewport and move up
  sparkle.style.top = `${100 + Math.random() * 20}vh`;
  sparkle.style.animationDuration = `${10 + Math.random() * 8}s`;
  sparkle.style.animationDelay = `${Math.random() * 5}s`;
  elements.heroSparkleContainer.appendChild(sparkle);
  // Remove sparkle after animation ends to prevent DOM clutter
  sparkle.addEventListener("animationend", () => sparkle.remove());
}

// ------------------ UI: Gallery ------------------
function createGalleryItem(item) {
  const itemEl = document.createElement("div");
  itemEl.className = "gallery-item";
  itemEl.tabIndex = 0; // Make focusable
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
    // Video-specific attributes
    mediaEl.muted = true;
    mediaEl.loop = true; // Videos should loop in the grid view
    mediaEl.playsInline = true;
    mediaEl.setAttribute('preload', 'metadata'); // Hint to the browser for faster loading
    mediaEl.poster = getAssetPath(item.poster);
    const overlay = document.createElement("div");
    overlay.className = "video-overlay"; // For the play icon
    itemEl.appendChild(overlay);
  }

  // IntersectionObserver for lazy loading
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        const targetMediaEl = entry.target.querySelector(item.type === 'image' ? 'img' : 'video');
        if (entry.isIntersecting) {
          if (item.type === "image") {
            // For images, set source to load
            if (!targetMediaEl.src) targetMediaEl.src = getAssetPath(item.src);
            observer.unobserve(entry.target); // Stop observing image once loaded
          } else {
            // For videos, set source and attempt to play (muted)
            if (!targetMediaEl.src) targetMediaEl.src = getAssetPath(item.src);
            targetMediaEl.play().catch((e) => console.log("Autoplay failed:", e));
          }
          entry.target.classList.add("loaded");
        } else if (item.type === "video" && targetMediaEl.src) {
          // Pause videos when they scroll out of view
          targetMediaEl.pause();
          // mediaEl.currentTime = 0; // Removed this line to prevent video from resetting
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of element is visible
  );

  itemEl.appendChild(mediaEl);
  observer.observe(itemEl);

  return itemEl;
}

function loadGallery() {
  // 1. Load Videos First (Appends to the correct #videos-grid element)
  const videosFragment = document.createDocumentFragment();
  siteConfig.videos.forEach((video) => {
    videosFragment.appendChild(createGalleryItem(video));
  });
  elements.videosGrid.appendChild(videosFragment);

  // 2. Load Photos Second (Appends to the correct #photos-grid element)
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
    // The poster data is useful for the lightbox if the video file itself is large
    poster: itemEl.querySelector("video")?.poster,
  };
}

// ------------------ UI: Lightbox ------------------
function openLightbox(itemData, index) {
  state.currentLightboxIndex = index;
  elements.lightbox.classList.add("is-open");
  document.body.style.overflow = "hidden"; // Prevent background scrolling

  // Hide both elements first
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
    // FIX: Set autoplay and unmute for the proper lightbox experience
    elements.lightboxVideo.autoplay = true; 
    elements.lightboxVideo.playsInline = true;
    elements.lightboxVideo.muted = false; // Unmute video in lightbox
    elements.lightboxVideo.loop = false;
    elements.lightboxVideo
      .play()
      .catch((e) => console.log("Video playback failed in lightbox:", e));
  }

  elements.lightboxCaption.textContent = itemData.caption;

  // Accessibility: Focus on close button when lightbox opens
  elements.lightboxClose.focus();
}

function closeLightbox() {
  elements.lightbox.classList.remove("is-open");
  document.body.style.overflow = "";
  elements.lightboxImg.src = "";
  elements.lightboxVideo.src = "";
  elements.lightboxVideo.pause();
  elements.lightboxVideo.currentTime = 0;

  // Optional: Restore focus to the element that opened the lightbox if tracked
  document.activeElement.blur();
}

function nextItem() {
  state.currentLightboxIndex =
    (state.currentLightboxIndex + 1) % state.currentLightboxItems.length;
  openLightbox(
    state.currentLightboxItems[state.currentLightboxIndex],
    state.currentLightboxIndex
  );
}

function prevItem() {
  state.currentLightboxIndex =
    (state.currentLightboxIndex - 1 + state.currentLightboxItems.length) %
    state.currentLightboxItems.length;
  openLightbox(
    state.currentLightboxItems[state.currentLightboxIndex],
    state.currentLightboxIndex
  );
}

// ------------------ UI: Mobile Gallery Switch ------------------
function switchGallery(targetId) {
  // Note: 'videos-grid' is now the expected default/first
  const isVideos = targetId === "videos-grid";

  // Toggle active class on the grid containers based on the target (CRITICAL FOR MOBILE CSS)
  elements.videosGrid.classList.toggle("active", isVideos);
  elements.photosGrid.classList.toggle("active", !isVideos);

  // Pause videos in the non-active grid when switching
  if (isVideos) {
    elements.photosGrid.querySelectorAll('video').forEach(v => v.pause());
  } else {
    elements.videosGrid.querySelectorAll('video').forEach(v => v.pause());
  }

  // Toggle active class on the mobile buttons
  elements.galleryToggleButtons.forEach((b) =>
    b.classList.toggle("active", b.dataset.target === targetId)
  );

  // Set the source data for the lightbox navigation
  state.currentLightboxItems = isVideos ? siteConfig.videos : siteConfig.photos;
}

// ------------------ Custom Cursor ------------------
function handleCursor(e) {
  if (state.reducedMotion || window.innerWidth <= 768) {
    return;
  }
  // Smooth movement by translating the cursor to the mouse position
  elements.customCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;

  // Check if the element being hovered is interactive
  const isHoverable = e.target.closest("a, button, .gallery-item");
  elements.customCursor.classList.toggle("hover", isHoverable);
}

// ------------------ Event Listeners & Init ------------------
function initEvents() {
  // Gallery controls for mobile
  elements.galleryToggleButtons.forEach((btn) => {
    btn.addEventListener("click", (e) =>
      switchGallery(e.target.dataset.target)
    );
  });

  // Music control
  elements.musicBtn.addEventListener("click", toggleMusic);

  // Smooth scroll to gallery from CTA button
  elements.scrollBtn.addEventListener("click", () => {
    // Scroll to the videos-gallery section, which is now the first content section
    document
      .getElementById("videos-gallery") // Changed to target videos-gallery
      .scrollIntoView({ behavior: "smooth" });
  });

  // Header & Parallax
  window.addEventListener("scroll", handleHeaderScroll);
  window.addEventListener("scroll", handleParallax);

  // Lightbox controls
  elements.lightboxClose.addEventListener("click", closeLightbox);
  elements.nextBtn.addEventListener("click", nextItem);
  elements.prevBtn.addEventListener("click", prevItem);

  // FIX: Mobile-friendly click fallback for lightbox next/prev
  if (window.innerWidth <= 768) {
    // Tapping the media in the lightbox advances to the next item
    elements.lightboxVideo.addEventListener("click", nextItem);
    elements.lightboxImg.addEventListener("click", nextItem);
  }

  // Close lightbox when clicking the backdrop
  elements.lightbox.addEventListener("click", (e) => {
    if (e.target === elements.lightbox) closeLightbox();
  });

  // Keyboard navigation for lightbox
  document.addEventListener("keydown", (e) => {
    if (!elements.lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextItem();
    if (e.key === "ArrowLeft") prevItem();
  });

  // Open lightbox from gallery
  document.addEventListener("click", (e) => {
    const itemEl = e.target.closest(".gallery-item");
    if (itemEl) {
      const itemSrc = itemEl.dataset.src;
      const itemType = itemEl.dataset.type;

      // Determine the full list of items for navigation
      const currentItems =
        itemType === "video" ? siteConfig.videos : siteConfig.photos;

      // Find the index of the clicked item
      const itemIndex = currentItems.findIndex(
        (item) => getAssetPath(item.src) === itemSrc
      );

      const itemData = getGalleryItemData(e.target);
      if (itemData) {
        state.currentLightboxItems = currentItems;
        openLightbox(itemData, itemIndex);
      }
    }
  });

  // Initialize music state on interaction
  if (state.isMusicPlaying) {
    // The play() call is a suggestion; actual playback requires user interaction
    // but we'll try to play if a user setting persists.
    elements.bgMusic
      .play()
      .catch((e) => console.error("Autoplay was prevented:", e));
    elements.musicBtn.classList.add("playing");
    elements.musicIcon.textContent = "🔊";
  }

  // Initial gallery display for mobile (now defaulting to videos-grid)
  if (window.innerWidth <= 768) {
    switchGallery("videos-grid");
  }

  // Custom cursor for desktop
  if (window.innerWidth > 768) {
    document.addEventListener("mousemove", handleCursor);
    document.body.style.cursor = "none";
  }
}

function initialize() {
  preCacheAssets();
  loadGallery();
  window.addEventListener("load", hideLoader);
  initEvents();
  // Enhanced Hero Title Text
  typeHeroTitle("Our Memory Lane");

  if (!state.reducedMotion) {
    // Start sparkle animation only if motion isn't reduced
    state.sparklesInterval = setInterval(createHeroSparkle, 500);
  }
}

document.addEventListener("DOMContentLoaded", initialize);
