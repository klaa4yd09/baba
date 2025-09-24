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
    { src: "a.mp4", poster: "a.jpg", caption: "❤️", type: "video" },
    { src: "b.mp4", poster: "b.jpg", caption: "❤️", type: "video" },
    { src: "c.mp4", poster: "c.jpg", caption: "❤️", type: "video" },
    { src: "d.mp4", poster: "d.jpg", caption: "❤️", type: "video" },
    { src: "28.mp4", poster: "28.jpg", caption: "❤️", type: "video" },
    { src: "29.mp4", poster: "29.jpg", caption: "❤️", type: "video" },
    { src: "30.mp4", poster: "30.jpg", caption: "❤️", type: "video" },
    { src: "32.mp4", poster: "32.jpg", caption: "❤️", type: "video" },
    { src: "20.mp4", poster: "20.jpg", caption: "❤️", type: "video" },
    { src: "49.mp4", poster: "49.jpg", caption: "❤️", type: "video" },
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
// ------------------ DOM Elements ------------------
const elements = {
  loader: document.getElementById("loader"),
  siteHeader: document.getElementById("site-header"),
  photosGrid: document.getElementById("photos-grid"),
  videosGrid: document.getElementById("videos-grid"),
  galleryToggleButtons: document.querySelectorAll(".gallery-toggle-btn"),
  scrollBtn: document.getElementById("scroll-btn"),
  musicBtn: document.getElementById("music-btn"),
  themeToggleBtn: document.getElementById("theme-toggle-btn"),
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
  mobileNavToggle: document.getElementById("mobile-nav-toggle"),
  mobileNavMenu: document.getElementById("mobile-nav-menu"),
};

// ------------------ State ------------------
const allItems = [...siteConfig.photos, ...siteConfig.videos];
const memoryItems = [...siteConfig.photos, ...siteConfig.videos];
let currentIndex = 0;
let lastScrollY = window.scrollY;
let sparklesInterval;
let isMusicPlaying = localStorage.getItem("playMusic") === "true";
let currentTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

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
  const parallaxSpeed = 0.5;
  if (elements.heroBgImage) {
    elements.heroBgImage.style.transform = `translateY(${
      scrollY * parallaxSpeed
    }px) scale(1.1)`;
  }
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
  const isPlaying = !elements.bgMusic.paused;
  if (isPlaying) {
    elements.bgMusic.pause();
    elements.musicBtn.classList.remove("playing");
    elements.musicIcon.textContent = "🎵";
    localStorage.setItem("playMusic", "false");
    isMusicPlaying = false;
  } else {
    elements.bgMusic
      .play()
      .then(() => {
        elements.musicBtn.classList.add("playing");
        elements.musicIcon.textContent = "🔊";
        localStorage.setItem("playMusic", "true");
        isMusicPlaying = true;
      })
      .catch((e) => console.error("Autoplay was prevented:", e));
  }
}

// ------------------ UI: Theme Toggle ------------------
function toggleTheme() {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  document.body.classList.toggle("dark-mode", currentTheme === "dark");
  localStorage.setItem("theme", currentTheme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const icon = elements.themeToggleBtn.querySelector(".icon");
  if (currentTheme === "dark") {
    icon.textContent = "🌙";
  } else {
    icon.textContent = "☀️";
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

  let mediaEl;
  if (item.type === "image") {
    mediaEl = document.createElement("img");
    mediaEl.src = getAssetPath(item.src);
    mediaEl.alt = item.caption;
    mediaEl.loading = "lazy";
  } else {
    mediaEl = document.createElement("video");
    mediaEl.src = getAssetPath(item.src);
    mediaEl.poster = getAssetPath(item.poster);
    mediaEl.muted = true;
    mediaEl.playsInline = true;
    mediaEl.loading = "lazy";

    // IntersectionObserver to handle auto-play/pause
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            mediaEl.play().catch((e) => console.log("Autoplay failed:", e));
          } else {
            mediaEl.pause();
            mediaEl.currentTime = 0;
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(mediaEl);

    const overlay = document.createElement("div");
    overlay.className = "video-overlay";
    itemEl.appendChild(overlay);
  }

  itemEl.appendChild(mediaEl);
  mediaEl.onload = () => itemEl.classList.add("loaded");
  return itemEl;
}

function loadGallery() {
  const photosFragment = document.createDocumentFragment();
  siteConfig.photos.forEach((photo) => {
    photosFragment.appendChild(createGalleryItem(photo));
  });
  elements.photosGrid.appendChild(photosFragment);

  const videosFragment = document.createDocumentFragment();
  siteConfig.videos.forEach((video) => {
    videosFragment.appendChild(createGalleryItem(video));
  });
  elements.videosGrid.appendChild(videosFragment);
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
let currentLightboxIndex = 0;

function openLightbox(item, index) {
  currentLightboxIndex = index;
  elements.lightbox.classList.add("is-open");
  document.body.style.overflow = "hidden";
  elements.lightbox.focus();

  elements.lightboxImg.style.display = "none";
  elements.lightboxVideo.style.display = "none";
  elements.lightboxVideo.pause();
  elements.lightboxVideo.currentTime = 0;

  if (item.type === "image") {
    elements.lightboxImg.src = item.src;
    elements.lightboxImg.alt = item.caption;
    elements.lightboxImg.style.display = "block";
  } else if (item.type === "video") {
    elements.lightboxVideo.src = item.src;
    elements.lightboxVideo.poster = item.poster || "";
    elements.lightboxVideo.style.display = "block";
    elements.lightboxVideo.controls = true;
  }

  elements.lightboxCaption.textContent = item.caption;
}

function closeLightbox() {
  elements.lightbox.classList.remove("is-open");
  document.body.style.overflow = "";
  elements.lightboxImg.src = "";
  elements.lightboxVideo.src = "";
  document.activeElement.blur();
}

function nextItem() {
  const currentMediaItems = elements.photosGrid.classList.contains("active")
    ? siteConfig.photos
    : siteConfig.videos;
  currentLightboxIndex = (currentLightboxIndex + 1) % currentMediaItems.length;
  openLightbox(currentMediaItems[currentLightboxIndex], currentLightboxIndex);
}

function prevItem() {
  const currentMediaItems = elements.photosGrid.classList.contains("active")
    ? siteConfig.photos
    : siteConfig.videos;
  currentLightboxIndex =
    (currentLightboxIndex - 1 + currentMediaItems.length) %
    currentMediaItems.length;
  openLightbox(currentMediaItems[currentLightboxIndex], currentLightboxIndex);
}

// ------------------ UI: Mobile Gallery Switch ------------------
function switchGallery(targetId) {
  elements.photosGrid.classList.toggle("active", targetId === "photos-grid");
  elements.videosGrid.classList.toggle("active", targetId === "videos-grid");
  elements.galleryToggleButtons.forEach((b) =>
    b.classList.toggle("active", b.dataset.target === targetId)
  );
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
  const isHoverable = e.target.closest("a, button, .gallery-item");
  elements.customCursor.classList.toggle("hover", isHoverable);
}

// ------------------ Event Listeners & Init ------------------
function initEvents() {
  elements.galleryToggleButtons.forEach((btn) => {
    btn.addEventListener("click", (e) =>
      switchGallery(e.target.dataset.target)
    );
  });
  elements.musicBtn.addEventListener("click", toggleMusic);
  elements.themeToggleBtn.addEventListener("click", toggleTheme);
  elements.scrollBtn.addEventListener("click", () => {
    document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
  });

  // Mobile navigation toggle
  elements.mobileNavToggle.addEventListener("click", () => {
    const isOpen = elements.mobileNavMenu.classList.toggle("is-open");
    elements.mobileNavToggle.classList.toggle("is-open", isOpen);
    elements.mobileNavToggle.setAttribute("aria-expanded", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  // Close mobile nav on link click
  document.querySelectorAll("[data-close-menu]").forEach((link) => {
    link.addEventListener("click", () => {
      elements.mobileNavMenu.classList.remove("is-open");
      elements.mobileNavToggle.classList.remove("is-open");
      elements.mobileNavToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });

  // Highlight active nav link on scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(
    ".main-nav .nav-link, .mobile-nav-menu .nav-link"
  );

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - elements.siteHeader.clientHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  window.addEventListener("scroll", handleHeaderScroll);
  window.addEventListener("scroll", handleParallax);
  elements.lightboxClose.addEventListener("click", closeLightbox);
  elements.nextBtn.addEventListener("click", nextItem);
  elements.prevBtn.addEventListener("click", prevItem);
  elements.lightbox.addEventListener("click", (e) => {
    if (e.target === elements.lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (!elements.lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextItem();
    if (e.key === "ArrowLeft") prevItem();
  });
  document.addEventListener("click", (e) => {
    const itemEl = e.target.closest(".gallery-item");
    if (itemEl) {
      const itemSrc = itemEl.dataset.src.replace("./", "");
      const itemType = itemEl.dataset.type;
      const currentItems =
        itemType === "image" ? siteConfig.photos : siteConfig.videos;
      const itemIndex = currentItems.findIndex((item) => item.src === itemSrc);

      const itemData = getGalleryItemData(e.target);
      if (itemData) {
        openLightbox(itemData, itemIndex);
      }
    }
  });

  if (isMusicPlaying) {
    elements.bgMusic
      .play()
      .catch((e) => console.error("Autoplay was prevented:", e));
    elements.musicBtn.classList.add("playing");
    elements.musicIcon.textContent = "🔊";
  }

  // FIXED: Simplified logic for initial gallery display
  if (window.innerWidth <= 768) {
    switchGallery("photos-grid");
  }

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
  document.body.classList.toggle("dark-mode", currentTheme === "dark");
  updateThemeIcon();
}

document.addEventListener("DOMContentLoaded", initialize);
