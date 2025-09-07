// ================= CONFIG =================
const siteConfig = {
    galleryItems: [
        { type: 'image', src: '13.jpg', caption: '💖' },
        { type: 'image', src: '14.jpg', caption: '💖' },
        { type: 'video', src: '1.mp4', caption: '💖' },
        { type: 'video', src: '2.mp4', caption: '💖' },
        { type: 'image', src: 'profile.jpg', caption: '💖' },
        { type: 'image', src: '15.jpg', caption: '💖' }
        // Add more items as needed
    ]
};

// ================= SELECTORS =================
const bgMusic = document.getElementById('bg-music');
const galleryGrid = document.querySelector('.gallery-grid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxVideo = document.getElementById('lightbox-video');
const caption = document.getElementById('lightbox-caption');
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const backBtn = document.querySelector(".back-btn");

let currentLightboxIndex = 0;
let slideshowInterval;
const SLIDE_DURATION = 4000; // 4 seconds

// ================= INITIALIZATION =================
document.addEventListener('DOMContentLoaded', () => {
    loadGallery();
    if (localStorage.getItem('playMusic') === 'true') {
        bgMusic.play().catch(err => console.log("Music auto-play failed:", err));
    }
});

// ================= GALLERY =================
function createGalleryItem(item, index) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('gallery-item');
    gridItem.style.animationDelay = `${(index + 1) * 0.15}s`;

    let mediaElement;
    if (item.type === 'image') {
        mediaElement = document.createElement('img');
        mediaElement.src = item.src;
        mediaElement.alt = item.caption;
    } else if (item.type === 'video') {
        mediaElement = document.createElement('video');
        mediaElement.src = item.src;
        mediaElement.preload = "metadata";
        mediaElement.muted = true;
        mediaElement.setAttribute('aria-label', item.caption);
        mediaElement.onmouseenter = () => mediaElement.play();
        mediaElement.onmouseleave = () => mediaElement.pause();
        
        const playIcon = document.createElement('div');
        playIcon.classList.add('video-play-icon');
        playIcon.textContent = '▶️';
        gridItem.appendChild(playIcon);
    }
    gridItem.appendChild(mediaElement);

    const captionElement = document.createElement('div');
    captionElement.classList.add('gallery-caption');
    captionElement.textContent = item.caption;
    gridItem.appendChild(captionElement);

    gridItem.addEventListener('click', () => {
        currentLightboxIndex = index;
        openLightbox(item);
    });
    
    return gridItem;
}

function loadGallery() {
    siteConfig.galleryItems.forEach((item, index) => {
        galleryGrid.appendChild(createGalleryItem(item, index));
    });
}

// ================= LIGHTBOX =================
function openLightbox(item){
    lightbox.style.display="flex";
    document.body.classList.add('no-scroll');
    if(item.type==='image'){
        lightboxImg.src=item.src;
        lightboxImg.style.display='block';
        lightboxVideo.style.display='none';
        lightboxVideo.pause();
    } else if(item.type==='video'){
        lightboxVideo.src=item.src;
        lightboxVideo.style.display='block';
        lightboxImg.style.display='none';
        lightboxVideo.load();
        lightboxVideo.play();
    }
    caption.textContent=item.caption;
    lightbox.classList.add("show");
    startSlideshow();
}

function closeLightbox(){
    stopSlideshow();
    lightbox.classList.remove("show");
    document.body.classList.remove('no-scroll');
    setTimeout(()=>{
        lightbox.style.display="none";
        lightboxImg.src="";
        lightboxVideo.pause();
        lightboxVideo.src="";
        caption.textContent="";
    },400);
}

// ================= LIGHTBOX NAVIGATION =================
prevBtn.addEventListener('click', () => {
    stopSlideshow();
    currentLightboxIndex = (currentLightboxIndex - 1 + siteConfig.galleryItems.length) % siteConfig.galleryItems.length;
    openLightbox(siteConfig.galleryItems[currentLightboxIndex]);
});

nextBtn.addEventListener('click', () => {
    stopSlideshow();
    currentLightboxIndex = (currentLightboxIndex + 1) % siteConfig.galleryItems.length;
    openLightbox(siteConfig.galleryItems[currentLightboxIndex]);
});

closeBtn.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
});

backBtn.addEventListener("click", () => {
    bgMusic.pause();
    localStorage.setItem('playMusic', 'false');
});

// ================= SLIDESHOW =================
function startSlideshow(){
    stopSlideshow();
    slideshowInterval = setInterval(()=>{
        nextBtn.click();
    }, SLIDE_DURATION);
}

function stopSlideshow(){
    if(slideshowInterval) clearInterval(slideshowInterval);
}

// ================= HEART PARTICLES =================
function createHeartParticle() {
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    const size = Math.random() * 10 + 5;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 5 + 5}s`;
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(), 10000);
}
setInterval(createHeartParticle, 500);
