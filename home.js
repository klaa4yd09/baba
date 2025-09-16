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
const galleryGrid = document.getElementById("gallery-grid");
const scrollBtn = document.getElementById("scroll-btn");
const musicBtn = document.getElementById("music-btn");
const bgMusic = document.getElementById("bg-music");
const musicIcon = musicBtn.querySelector(".music-icon");
const heroSection = document.getElementById("hero");

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
    return `./assets/${filename}`;
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

// --- Gallery & Lightbox Logic ---
function createGalleryItem(item, index) {
    const itemEl = document.createElement("div");
    itemEl.className = "gallery-item";
    itemEl.setAttribute("tabindex", "0");

    const mediaEl = document.createElement(item.type === "image" ? "img" : "video");
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
        currentIndex = index;
        openLightbox(item);
    });

    return itemEl;
}

function loadGallery() {
    siteConfig.galleryItems.forEach((item, index) => {
        const galleryItem = createGalleryItem(item, index);
        galleryGrid.appendChild(galleryItem);
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
    currentIndex = (currentIndex + direction + siteConfig.galleryItems.length) % siteConfig.galleryItems.length;
    openLightbox(siteConfig.galleryItems[currentIndex]);
}

// --- Event Listeners ---
document.addEventListener("DOMContentLoaded", () => {
    loadGallery();
    
    // Hide loader after a delay
    setTimeout(hideLoader, 1000);

    // Persist music state
    if (localStorage.getItem("memory_playMusic") === "true") {
        bgMusic.play().catch(() => {});
        musicBtn.classList.add("playing");
        musicIcon.textContent = "🔊";
    }
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
