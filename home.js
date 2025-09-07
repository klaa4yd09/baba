// ================= CONFIGURATION =================
const siteConfig = {
    galleryItems: [
        { type: 'image', src: '13.jpg', caption: '💖' },
        { type: 'image', src: '14.jpg', caption: '💖' },
        { type: 'video', src: '1.mp4', caption: '💖' },
        { type: 'video', src: '2.mp4', caption: '💖' },
        { type: 'video', src: '3.mp4', caption: '💖' },
        { type: 'image', src: '4.jpg', caption: '💖' },
        { type: 'image', src: '5.jpg', caption: '💖' },
        { type: 'image', src: '6.jpg', caption: '💖' },
        { type: 'image', src: '7.jpg', caption: '💖' },
        { type: 'image', src: '8.jpg', caption: '💖' },
        { type: 'image', src: '9.jpg', caption: '💖' },
        { type: 'image', src: '10.jpg', caption: '💖' },
        { type: 'image', src: '11.jpg', caption: '💖' },
        { type: 'image', src: '12.jpg', caption: '💖' },
        { type: 'image', src: '16.jpg', caption: '💖' },
        { type: 'image', src: '17.jpg', caption: '💖' },
        { type: 'image', src: '18.jpg', caption: '💖' },
        { type: 'image', src: '19.jpg', caption: '💖' },
        { type: 'image', src: 'profile.jpg', caption: '💖' },
        { type: 'video', src: '20.mp4', caption: '💖' },
        { type: 'image', src: '21.jpg', caption: '💖' },
        { type: 'image', src: '22.jpg', caption: '💖' },
        { type: 'image', src: '23.jpg', caption: '💖' },
        { type: 'image', src: '24.jpg', caption: '💖' },
        { type: 'image', src: '25.jpg', caption: '💖' },
        { type: 'image', src: '26.jpg', caption: '💖' },
    ]
};

// ================= SELECTORS =================
const bgMusic = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');
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

// ================= INITIALIZATION =================
document.addEventListener('DOMContentLoaded', () => {
    loadGallery();
    if(localStorage.getItem('playMusic')==='true'){
        bgMusic.play().catch(()=>{});
        musicBtn.textContent="🔊";
    }
});

// ================= MUSIC CONTROL =================
musicBtn.addEventListener('click',()=>{
    if(bgMusic.paused){
        bgMusic.play();
        localStorage.setItem('playMusic','true');
        musicBtn.textContent="🔊";
    } else {
        bgMusic.pause();
        localStorage.setItem('playMusic','false');
        musicBtn.textContent="🎵";
    }
});

// ================= GALLERY FUNCTIONS =================
function createGalleryItem(item,index){
    const gridItem = document.createElement('div');
    gridItem.classList.add('gallery-item');
    gridItem.style.animationDelay=`${(index+1)*0.15}s`;

    let mediaElement;
    if(item.type==='image'){
        mediaElement = document.createElement('img');
        mediaElement.dataset.src=item.src;
        mediaElement.alt=item.caption;
    } else if(item.type==='video'){
        mediaElement=document.createElement('video');
        mediaElement.src=item.src;
        mediaElement.preload="metadata";
        mediaElement.muted=true;
        mediaElement.setAttribute('aria-label', item.caption);
        mediaElement.onmouseenter=()=>mediaElement.play();
        mediaElement.onmouseleave=()=>mediaElement.pause();
        const playIcon=document.createElement('div');
        playIcon.classList.add('video-play-icon');
        playIcon.textContent='▶️';
        gridItem.appendChild(playIcon);
    }
    gridItem.appendChild(mediaElement);

    const captionElement=document.createElement('div');
    captionElement.classList.add('gallery-caption');
    captionElement.textContent=item.caption;
    gridItem.appendChild(captionElement);

    gridItem.addEventListener('click',()=>{ 
        currentLightboxIndex=index; 
        openLightbox(item); 
    });

    return gridItem;
}

// Lazy loading observer
const observer = new IntersectionObserver((entries, obs)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            const img = entry.target;
            img.src = img.dataset.src;
            obs.unobserve(img);
        }
    });
},{threshold:0.1});

function loadGallery(){
    siteConfig.galleryItems.forEach((item,index)=>{
        const gridItem=createGalleryItem(item,index);
        galleryGrid.appendChild(gridItem);
        if(item.type==='image') observer.observe(gridItem.querySelector('img'));
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
}

function closeLightbox(){
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
prevBtn.addEventListener('click',()=>{
    currentLightboxIndex=(currentLightboxIndex-1+siteConfig.galleryItems.length)%siteConfig.galleryItems.length;
    openLightbox(siteConfig.galleryItems[currentLightboxIndex]);
});
nextBtn.addEventListener('click',()=>{
    currentLightboxIndex=(currentLightboxIndex+1)%siteConfig.galleryItems.length;
    openLightbox(siteConfig.galleryItems[currentLightboxIndex]);
});
closeBtn.addEventListener("click",closeLightbox);
lightbox.addEventListener("click",(e)=>{ if(e.target===lightbox) closeLightbox(); });

// Keyboard navigation
document.addEventListener('keydown', e=>{
    if(!lightbox.classList.contains('show')) return;
    if(e.key==='ArrowLeft') prevBtn.click();
    if(e.key==='ArrowRight') nextBtn.click();
    if(e.key==='Escape') closeLightbox();
});

// Swipe support
let touchStartX=0,touchEndX=0;
lightbox.addEventListener('touchstart',e=>{ touchStartX=e.changedTouches[0].screenX; });
lightbox.addEventListener('touchend',e=>{
    touchEndX=e.changedTouches[0].screenX;
    if(touchEndX < touchStartX - 50) nextBtn.click();
    if(touchEndX > touchStartX + 50) prevBtn.click();
});

