:root {
  --color-primary: #B0726D; /* Muted Rosewood */
  --color-secondary: #F7B7C7; /* Soft Blush Pink */
  --color-accent: #E6C7E6; /* Lavender Champagne */
  --color-background-light: #FFFAFB; /* Gentle Blush Ivory */
  --color-background-dark: #1A1A1A; /* Elegant Charcoal */
  --color-text-light: #3A2D2D; /* Warm Cocoa */
  --color-text-dark: #FDEDED; /* Creamy Rose White */

  /* GRADIENT SYSTEM */
  --gradient-pink: linear-gradient(135deg, #FFFFFF, #F0F0F0);
  --gradient-rose: linear-gradient(135deg, #B0726D, #F7B7C7);
  --gradient-hover: linear-gradient(135deg, #F7B7C7, #E6C7E6); /* New hover gradient */
  --gradient-soft-bg: radial-gradient(circle at top left, var(--color-background-light) 0%, #FFF5F7 100%); /* New radial background gradient */

  /* FONT SYSTEM */
  --font-heading: 'Playfair Display', serif; /* Elegant */
  --font-body: 'Quicksand', sans-serif; /* Soft + Cute */
  --font-script: 'Great Vibes', cursive; /* Girly Accent */

  /* TRANSITIONS & TIMING */
  --transition-fast: 0.3s ease-in-out;
  --transition-medium: 0.4s ease-in-out; /* Added medium transition */
  --transition-slow: 0.6s ease; /* Slightly slower for subtle effects */

  /* SHADOWS & RADIUS */
  --shadow-light: 0 4px 15px rgba(0, 0, 0, 0.08);
  --shadow-medium: 0 8px 25px rgba(0, 0, 0, 0.15);
  --shadow-heavy: 0 15px 40px rgba(0, 0, 0, 0.25);
  --shadow-glow: 0 0 15px rgba(247, 183, 199, 0.7); /* Light glow shadow */
  --border-radius-base: 15px;
}

/* ------------------ Global Reset & Base Styles ------------------ */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-body);
  color: var(--color-text-light);
  background-color: var(--color-background-light);
  background-image: var(--gradient-soft-bg); /* Use soft radial gradient */
  line-height: 1.7;
  font-size: 1rem;
  overflow-x: hidden;
  /* Added a subtle pattern overlay for texture */
  background-image: var(--gradient-soft-bg), url('data:image/svg+xml;utf8,<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="1.5" fill="%23fcf0f0" /><circle cx="80" cy="80" r="1.5" fill="%23fcf0f0" /><circle cx="20" cy="80" r="1.5" fill="%23fcf0f0" /><circle cx="80" cy="20" r="1.5" fill="%23fcf0f0" /></svg>');
  background-repeat: repeat;
  background-size: auto, 50px;
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--transition-fast), transform var(--transition-fast);
}
a:hover { color: var(--color-secondary); }

/* Section Wrapper for common padding/max-width */
.section-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3vw;
}


/* ------------------ Typography ------------------ */
h1, h2, .logo {
  font-family: var(--font-heading);
  font-weight: 700;
  color: var(--color-primary);
}

h1 {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  letter-spacing: 2px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25); /* Stronger Shadow */
}

h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  text-align: center;
  margin-bottom: 3.5rem; /* Increased margin */
  padding-top: 1rem;
  position: relative;
  text-transform: capitalize;
}

/* New Decorative Underline for H2 */
h2::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 2px;
  background: var(--gradient-rose); /* Use rose gradient for elegance */
  border-radius: 1px;
  transition: width var(--transition-medium);
}
h2:hover::after {
  width: 100px; /* Expands wider on hover */
}

.section-title {
  position: relative;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--color-primary); /* Default to primary color */
  font-family: var(--font-heading);
  font-weight: 600;
}

.section-title::before { /* Added a pre-title element (can be a small icon or accent) */
  content: '✦';
  display: block;
  font-size: 1.5rem;
  color: var(--color-secondary);
  margin-bottom: 5px;
}

.section-title::after {
  content: '';
  display: block;
  width: 70px;
  height: 3px;
  border-radius: 2px;
  background: var(--gradient-pink);
  margin: 10px auto 0;
  box-shadow: var(--shadow-light);
}

/* New: Accent Text Style */
p.accent-text {
  font-family: var(--font-script);
  font-size: 1.5rem;
  color: var(--color-secondary);
  text-align: center;
  margin: 1.5rem auto 3rem;
  max-width: 700px;
  font-style: italic;
  text-shadow: 0 1px 3px rgba(0,0,0,0.15);
}


/* ------------------ Custom Cursor ------------------ */
.custom-cursor {
  position: fixed;
  width: 30px;
  height: 30px;
  border: 2px solid var(--color-secondary);
  border-radius: 50%;
  pointer-events: none;
  transition: width 0.3s, height 0.3s, opacity 0.3s, border-color 0.3s, transform 0.1s ease-out; /* Added transform for smoother follow */
  z-index: 9999;
  mix-blend-mode: difference;
  opacity: 0.8;
  display: flex; /* For inner dot */
  justify-content: center;
  align-items: center;
}
.custom-cursor::after { /* Inner dot */
  content: '';
  width: 6px;
  height: 6px;
  background-color: var(--color-secondary);
  border-radius: 50%;
  opacity: 0.7;
  transition: all 0.3s;
}
.custom-cursor.hover {
  width: 50px;
  height: 50px;
  border-color: var(--color-primary);
  opacity: 1;
  transform: scale(1.2);
  box-shadow: var(--shadow-glow);
}
.custom-cursor.hover::after {
  background-color: var(--color-primary);
  transform: scale(0); /* Hide inner dot on hover */
}
@media (max-width: 768px) {
  .custom-cursor { display: none; }
  body { cursor: default; }
}

/* ------------------ Loader ------------------ */
.loader-container {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: var(--color-background-light);
  display: flex; justify-content: center; align-items: center;
  z-index: 10000;
  opacity: 1;
  transition: opacity var(--transition-medium) var(--transition-slow); /* Use medium for timing */
}
.loader-container.hidden {
  opacity: 0;
  pointer-events: none;
}
.loader {
  border: 8px solid #eee;
  border-top: 8px solid var(--color-secondary);
  border-radius: 50%;
  width: 60px; height: 60px;
  animation: spin 1s linear infinite, glow 2s ease-in-out infinite alternate; /* Added glow */
  box-shadow: 0 0 12px rgba(247,183,199,0.5);
}
@keyframes spin {
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
}
@keyframes glow {
  0% { box-shadow: 0 0 10px var(--color-secondary), 0 0 20px var(--color-accent); }
  100% { box-shadow: 0 0 20px var(--color-primary), 0 0 30px var(--color-secondary); }
}

/* ------------------ Header ------------------ */
.site-header {
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  display: flex; justify-content: space-between; align-items: center;
  padding: 1rem 3vw;
  background: rgba(255, 250, 251, 0.95); /* Increased opacity */
  backdrop-filter: blur(15px); /* Increased blur */
  box-shadow: var(--shadow-light); /* Use defined shadow */
  z-index: 1000;
  transition: transform var(--transition-slow), opacity var(--transition-slow), padding var(--transition-fast);
}
.site-header.hide { transform: translateY(-100%); opacity: 0; }

/* New: Header Scroll Effect */
.site-header.scrolled {
  padding: 0.8rem 3vw;
  box-shadow: var(--shadow-medium);
}

.logo {
  font-size: 1.8rem;
  font-family: var(--font-script);
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--transition-fast), transform var(--transition-fast);
}
.logo:hover {
  color: var(--color-secondary);
  transform: scale(1.05) rotate(-2deg); /* Subtle spin */
}

.main-nav a {
  color: var(--color-text-light); /* Changed to text-light for better contrast */
  text-decoration: none;
  margin-left: 20px;
  font-weight: 600;
  font-family: var(--font-body);
  position: relative;
  transition: color 0.3s ease, transform 0.2s ease; /* Added transform */
  padding: 5px 0;
}
.main-nav a:hover {
  color: var(--color-secondary);
  transform: translateY(-2px);
}
.main-nav a::after {
  content: '';
  position: absolute;
  width: 0; height: 2px;
  background: var(--gradient-rose); /* Used rose gradient */
  left: 0; bottom: -5px;
  transition: width var(--transition-fast);
}
.main-nav a:hover::after { width: 100%; }

/* ------------------ Music Button ------------------ */
.music-btn {
  background: none;
  border: 2px solid var(--color-primary);
  border-radius: 50%;
  width: 42px; height: 42px;
  font-size: 1rem;
  cursor: pointer;
  color: var(--color-primary);
  transition: all var(--transition-fast);
  display: flex; justify-content: center; align-items: center;
}
.music-btn:hover {
  background: var(--gradient-hover); /* Use new hover gradient */
  color: var(--color-background-dark);
  transform: scale(1.1);
  box-shadow: var(--shadow-glow);
}
.music-btn.playing {
  background: var(--color-secondary);
  border-color: var(--color-secondary);
  color: var(--color-background-light);
  animation: pulse 1.5s infinite, rotate 3s linear infinite; /* Added subtle rotate */
}
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(247,183,199,0.6); }
  70% { box-shadow: 0 0 0 14px rgba(247,183,199,0); }
  100% { box-shadow: 0 0 0 0 rgba(247,183,199,0); }
}
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}


/* ------------------ Hero Section ------------------ */
.hero-section {
  position: relative;
  height: 100vh;
  display: flex; justify-content: center; align-items: center;
  text-align: center;
  color: var(--color-background-light);
  overflow: hidden;
}
.hero-bg-image {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 110%;
  background-size: cover;
  background-position: center 30%;
  filter: brightness(0.5) saturate(1.2) contrast(1.1); /* Enhanced filter */
  transform: scale(1.1);
  transition: background-image 1s ease, filter 0.8s ease;
}
/* New: Dark overlay for text readability */
.hero-bg-image::after {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: linear-gradient(to top, rgba(26,26,26,0.4) 0%, rgba(26,26,26,0) 50%, rgba(26,26,26,0.6) 100%);
}
.hero-content {
  position: relative;
  z-index: 5;
  padding: 1rem;
  animation: fadeInDown 1s var(--transition-medium) forwards; /* Intro animation */
  opacity: 0;
}
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
.hero-title {
  color: var(--color-background-light);
  margin-bottom: 0.5rem;
  letter-spacing: 3px;
  text-transform: uppercase;
}
.hero-subtitle {
  font-size: clamp(1.2rem, 2vw, 1.6rem);
  font-family: var(--font-script);
  font-weight: 400;
  max-width: 650px;
  margin: 0 auto 3rem;
  text-shadow: 1px 1px 6px rgba(0,0,0,0.8); /* Stronger shadow */
  color: var(--color-secondary);
  animation: fadeIn 1.5s 0.5s forwards;
  opacity: 0;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* New: Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 35px;
  border: 2px solid var(--color-text-dark);
  border-radius: 20px;
  z-index: 5;
  opacity: 0.8;
}
.scroll-indicator::after {
  content: '';
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  background: var(--color-secondary);
  border-radius: 50%;
  animation: scroll-mouse 1.5s infinite;
}
@keyframes scroll-mouse {
  0% { transform: translate(-50%, 0); opacity: 1; }
  100% { transform: translate(-50%, 15px); opacity: 0; }
}

/* ------------------ Call To Action Button ------------------ */
.cta-button {
  background: var(--gradient-rose);
  color: var(--color-background-light);
  border: none;
  padding: 16px 40px; /* Slightly larger */
  font-size: 1.15rem;
  font-weight: 700;
  border-radius: 50px;
  cursor: pointer;
  font-family: var(--font-body);
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(176,114,109,0.3);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-medium);
  position: relative;
  overflow: hidden; /* For ripple effect */
}
.cta-button:hover {
  transform: scale(1.08) translateY(-3px); /* Pronounced lift */
  box-shadow: 0 8px 25px rgba(176,114,109,0.45);
  background: var(--gradient-hover); /* New gradient on hover */
}
/* New: Subtle Ripple Effect (Requires JS) */
.cta-button .ripple {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple-effect 0.6s linear;
  background-color: rgba(255, 255, 255, 0.7);
}
@keyframes ripple-effect {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

/* ------------------ Sparkles ------------------ */
.hero-sparkle-container {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 4;
}
.hero-sparkle {
  position: absolute;
  background: radial-gradient(circle at center, var(--color-secondary) 0%, var(--color-accent) 50%, transparent 100%); /* Radial gradient for sparkle */
  border-radius: 50%;
  box-shadow: 0 0 10px var(--color-accent), 0 0 15px rgba(247,183,199,0.7);
  opacity: 0.6;
  animation: twinkle var(--transition-slow) infinite ease-out;
}
@keyframes twinkle {
  0% { transform: translateY(0) scale(0.8); opacity: 0; }
  20% { opacity: 1; transform: translateY(-10%) scale(1.2); }
  80% { opacity: 1; }
  100% { transform: translateY(-100vh) scale(0.5); opacity: 0; }
}
/* Diverse sparkle animations */
.hero-sparkle:nth-child(even) { animation-duration: 4s; animation-delay: 0.5s; opacity: 0.7; }
.hero-sparkle:nth-child(odd) { animation-duration: 3s; animation-delay: 1s; opacity: 0.5; }


/* ------------------ Gallery Section ------------------ */
.gallery-section { padding: 5rem 0 8rem; }
.gallery-section.dark { background-color: var(--color-background-light); }
.gallery-section.dark .section-title { color: var(--color-background-dark); }
.gallery-section.dark .section-title::after { background: var(--gradient-pink); }

.gallery-grid-container {
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Larger min-width */
  gap: 25px; /* Increased gap */
}
.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius-base); /* Used variable */
  box-shadow: var(--shadow-light);
  cursor: pointer;
  aspect-ratio: 1/1;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast), border-color var(--transition-fast);
  border: 3px solid transparent; /* Decorative border */
}
.gallery-item:hover {
  transform: translateY(-8px) scale(1.03); /* More pronounced lift */
  box-shadow: var(--shadow-medium), var(--shadow-glow);
  border-color: var(--color-secondary);
}
.gallery-item img,
.gallery-item video {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
  opacity: 0;
  transition: opacity var(--transition-slow), filter 0.5s ease;
}
.gallery-item.loaded img,
.gallery-item.loaded video { opacity: 1; }
.gallery-item:hover img, .gallery-item:hover video {
  filter: brightness(1.1) saturate(1.05);
}

.video-overlay {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex; justify-content: center; align-items: center;
  transition: background var(--transition-fast);
}
.video-overlay::before {
  content: '▶';
  font-size: 3.5rem; /* Larger icon */
  color: var(--color-secondary);
  opacity: 0.8;
  transition: opacity var(--transition-fast), transform var(--transition-fast);
}
.gallery-item:hover .video-overlay { background: rgba(0,0,0,0.55); }
.gallery-item:hover .video-overlay::before { opacity: 1; transform: scale(1.1); }

/* New: Hover Caption */
.gallery-item-caption {
  position: absolute;
  bottom: 0; left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(26,26,26,0.8) 0%, rgba(26,26,26,0) 100%);
  color: var(--color-text-dark);
  padding: 15px 10px;
  font-family: var(--font-script);
  font-size: 1.2rem;
  text-align: center;
  opacity: 0;
  transform: translateY(100%);
  transition: opacity var(--transition-medium), transform var(--transition-medium);
  pointer-events: none;
}
.gallery-item:hover .gallery-item-caption {
  opacity: 1;
  transform: translateY(0);
}


/* ------------------ About Section ------------------ */
.about-section {
  background-color: var(--color-background-dark);
  color: var(--color-text-dark);
  padding: 5rem 0 8rem; /* Increased padding */
}
.about-section h2 { color: var(--color-background-light); }
.about-section .section-title { color: var(--color-background-light); }
.about-section .section-title::after { background: var(--gradient-pink); }
.about-content {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 60px; /* Increased gap */
  padding: 0 3vw;
}
.about-text-container { flex: 1; }
.about-text-container p {
  font-size: 1.15rem; /* Larger text */
  line-height: 1.9;
  color: var(--color-text-dark);
  font-family: var(--font-body);
  margin-bottom: 1.2rem;
}
.about-image-container {
  flex: 0 0 380px; /* Larger container */
  max-width: 380px;
  border-radius: var(--border-radius-base);
  overflow: hidden;
  box-shadow: var(--shadow-heavy);
  position: relative;
  border: 4px solid var(--color-secondary); /* Decorative border */
  transition: transform var(--transition-medium), box-shadow var(--transition-medium);
}
.about-image-container:hover {
  transform: scale(1.03) rotate(1deg);
  box-shadow: 0 15px 45px rgba(0,0,0,0.5), var(--shadow-glow);
}
.about-image {
  width: 100%; height: auto; display: block;
  filter: grayscale(0.2) contrast(1.05);
  transition: filter var(--transition-medium);
}
.about-image-container:hover .about-image {
  filter: grayscale(0) contrast(1.1);
}

/* ------------------ Footer ------------------ */
.site-footer {
  background: var(--gradient-rose);
  color: var(--color-background-light);
  padding: 4rem 2rem; /* Increased padding */
  text-align: center;
  font-family: var(--font-body);
  box-shadow: 0 -5px 20px rgba(0,0,0,0.2);
  position: relative;
  overflow: hidden;
}
/* New: Subtle dotted pattern on footer */
.site-footer::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-image: url('data:image/svg+xml;utf8,<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="1.5" fill="%23FFFFFF" opacity="0.1" /><circle cx="80" cy="80" r="1.5" fill="%23FFFFFF" opacity="0.1" /><circle cx="20" cy="80" r="1.5" fill="%23FFFFFF" opacity="0.1" /><circle cx="80" cy="20" r="1.5" fill="%23FFFFFF" opacity="0.1" /></svg>');
  background-repeat: repeat;
  background-size: 80px;
  opacity: 0.3;
  z-index: 0;
}


.footer-content {
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.footer-logo {
  font-family: var(--font-script);
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  display: inline-block;
  color: var(--color-background-light);
  text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
}
.footer-logo:hover { color: var(--color-accent); }

.footer-links {
  margin: 1rem 0 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
}
.footer-links a {
  color: var(--color-background-light);
  text-decoration: none;
  font-weight: 500;
  transition: color var(--transition-fast), transform var(--transition-fast);
  position: relative;
}
.footer-links a:hover {
  color: var(--color-secondary);
  transform: translateY(-2px);
}
.footer-links a::after { /* Underline on hover for footer links */
  content: '';
  position: absolute;
  width: 0; height: 1px;
  background: var(--color-secondary);
  left: 0; bottom: -3px;
  transition: width var(--transition-fast);
}
.footer-links a:hover::after { width: 100%; }

.footer-socials {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 1.5rem;
}
.footer-socials a {
  width: 42px; height: 42px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  border: 2px solid var(--color-background-light);
  color: var(--color-background-light);
  font-size: 1.3rem;
  transition: all var(--transition-fast);
}
.footer-socials a:hover {
  background: var(--color-background-light);
  color: var(--color-primary);
  transform: scale(1.15) rotate(5deg);
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

.footer-bottom {
  font-size: 0.95rem;
  opacity: 0.95;
  margin-top: 1rem;
}


/* ------------------ Lightbox ------------------ */
.lightbox {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(26,26,26,0.98); /* Darker and more opaque */
  display: flex; justify-content: center; align-items: center;
  z-index: 9000;
  visibility: hidden;
  opacity: 0;
  transition: opacity var(--transition-medium), visibility var(--transition-medium);
}
.lightbox.is-open { visibility: visible; opacity: 1; }
.lightbox-stage {
  position: relative;
  max-width: 95vw; max-height: 95vh;
  display: flex; flex-direction: column; align-items: center;
  transform: scale(0.95);
  transition: transform var(--transition-medium) cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Springy entrance */
}
.lightbox.is-open .lightbox-stage {
  transform: scale(1);
}
.lightbox-media-container {
  flex-grow: 1;
  display: flex; justify-content: center; align-items: center;
  max-width: 100%; max-height: calc(100vh - 120px);
  padding: 10px;
}
#lightbox-img, #lightbox-video {
  max-width: 100%; max-height: 100%;
  object-fit: contain;
  border-radius: 10px; /* Larger radius */
  box-shadow: 0 0 30px rgba(0,0,0,0.5);
}
.lightbox-caption {
  color: var(--color-secondary);
  margin-top: 15px;
  font-size: 1.3rem;
  font-family: var(--font-script);
  text-align: center;
  max-width: 90%;
  line-height: 1.6;
  text-shadow: 0 1px 3px rgba(0,0,0,0.5);
}

/* New: Lightbox Controls Polish */
.lightbox-close,
.lightbox-prev,
.lightbox-next {
  position: absolute;
  background: rgba(0,0,0,0.6);
  border: none;
  color: var(--color-text-dark);
  font-size: 2rem;
  width: 48px; height: 48px;
  border-radius: 50%;
  cursor: pointer;
  transition: all var(--transition-fast);
  display: flex; justify-content: center; align-items: center;
  z-index: 9100;
  backdrop-filter: blur(5px);
}

/* Close button at top-right */
.lightbox-close {
  top: 20px;
  right: 20px;
  transform: none;
  font-size: 2.2rem;
  background: rgba(0,0,0,0.7);
}
.lightbox-close:hover {
  background: var(--color-secondary);
  color: var(--color-background-dark);
  transform: scale(1.1);
}

/* Prev/Next */
.lightbox-prev { left: 20px; top: 50%; transform: translateY(-50%); }
.lightbox-next { right: 20px; top: 50%; transform: translateY(-50%); }
.lightbox-prev:hover, .lightbox-next:hover {
  background: var(--color-secondary);
  color: var(--color-background-dark);
  transform: translateY(-50%) scale(1.1);
}

/* ------------------ Responsive ------------------ */
@media (max-width: 1024px) {
  /* About Section Stacking */
  .about-content {
    flex-direction: column;
    gap: 40px;
    text-align: center;
  }
  .about-text-container p {
    text-align: left; /* Keep body text left-aligned for readability */
  }
  .about-image-container {
    flex: none; order: -1; margin-bottom: 2rem;
    max-width: 80%;
  }

  /* Lightbox Controls Adjustment */
  .lightbox-close { top: 10px; right: 10px; width: 40px; height: 40px; font-size: 1.8rem; }
  .lightbox-prev, .lightbox-next {
    top: auto; bottom: 20px;
    width: 40px; height: 40px;
    font-size: 1.6rem;
    transform: none;
  }
  .lightbox-prev { left: 20px; }
  .lightbox-next { right: 20px; }
}

@media (max-width: 768px) {
  .site-header { padding: 0.8rem 5vw; }
  .main-nav { display: none; }
  .music-btn { margin-left: auto; } /* Push button to the right */

  h1 { font-size: clamp(2rem, 8vw, 3rem); }

  .gallery-grid {
    grid-template-columns: 1fr; /* Single column on small screens */
    gap: 15px;
  }

  /* Mobile Gallery Controls (Enhanced) */
  .mobile-gallery-controls {
    display: flex; justify-content: center;
    padding: 1rem 0;
    background: var(--color-background-light);
    border-bottom: 1px solid #eee;
    position: sticky; top: 0; z-index: 50;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05); /* Subtle shadow for sticky effect */
  }
  .gallery-toggle-btn {
    background: none;
    border: none;
    padding: 10px 20px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    color: var(--color-text-light);
    transition: all var(--transition-fast);
    border-bottom: 2px solid transparent;
    margin: 0 10px;
  }
  .gallery-toggle-btn.active {
    color: var(--color-primary);
    border-bottom-color: var(--color-primary);
    transform: translateY(-2px);
    text-shadow: 0 0 5px rgba(176,114,109,0.3);
  }
  /* Ensure grids are hidden/shown based on JS activation */
  #photos-grid, #videos-grid { display: none; }
  #photos-grid.active, #videos-grid.active { display: grid; }
}
