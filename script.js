// ======================================
// CONFIGURATION: Customize Your Content Here
// ======================================
const siteConfig = {
    specialDate: '2024-02-14T00:00:00', // YYYY-MM-DD format
};

// ======================================
// SELECTORS & STATE
// ======================================
const preloader = document.querySelector('.preloader');
const enterBtn = document.getElementById('enter-btn');
const bgMusic = document.getElementById('bg-music');
const daysCountSpan = document.getElementById('days-count');
const sparkleContainer = document.querySelector('.sparkle-container');
const heartsContainer = document.querySelector('.hearts-container');
const titleLetters = document.querySelectorAll('.title-letter');

// ======================================
// PRELOADER & INITIALIZATION
// ======================================
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('load', () => {
        // Hide preloader and show content
        setTimeout(() => {
            preloader.classList.add('preloader-hidden');
            document.body.style.overflow = 'auto';
            // Animate title letters after preloader is gone
            titleLetters.forEach((letter, index) => {
                letter.style.animationDelay = `${index * 0.1}s`;
            });
        }, 1500); // 1.5 seconds delay to let animation play
    });
    
    // Create hearts on DOM content loaded
    createHearts();
});

// ======================================
// DYNAMIC EFFECTS
// ======================================

// Floating Hearts Background
const heartTypes = ['💖','💕','💗','💓','💞','💝'];

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = heartTypes[Math.floor(Math.random() * heartTypes.length)];
    const size = Math.random() * 20 + 20; // 20px to 40px
    heart.style.fontSize = `${size}px`;
    heart.style.left = Math.random() * 100 + 'vw';
    const duration = Math.random() * 6 + 4; // 4s to 10s
    heart.style.animationDuration = `${duration}s`;
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), duration * 1000);
}

function createHearts() {
    setInterval(createHeart, 400);
}

// Sparkle Cursor Effect
document.addEventListener('mousemove', (e) => {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = `${e.clientX}px`;
    sparkle.style.top = `${e.clientY}px`;
    sparkleContainer.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 800);
});

// ======================================
// MUSIC & NAVIGATION
// ======================================

// Music Play + Navigation to Gallery
enterBtn.addEventListener('click', () => {
    bgMusic.play().catch(err => console.log("Music play failed:", err));
    localStorage.setItem('playMusic', 'true');
});