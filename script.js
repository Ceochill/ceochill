// === FUNGSI TAB PORTFOLIO ===
function openTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    const selectedContent = document.getElementById(tabId);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }

    const activeBtn = document.querySelector(`.tab-btn[onclick="openTab('${tabId}')"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// === FUNGSI UNTUK LIGHTBOX (LAYAR PENUH GALERI) ===
function openModal(imageSrc) {
    let modal = document.getElementById("imageModal");
    let fullImage = document.getElementById("fullImage");
    modal.style.display = "flex"; 
    fullImage.src = imageSrc; 
}

function closeModal() {
    let modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// === FUNGSI UNTUK MENAMPILKAN ROBLOX SHOWCASE ===
function toggleRobloxShowcase() {
    var showcase = document.getElementById("roblox-showcase");
    if (showcase.style.display === "none" || showcase.style.display === "") {
        showcase.style.display = "block";
        showcase.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        showcase.style.display = "none";
    }
}

// === FUNGSI EFEK KETIK (TYPEWRITER) ===
const typedTextSpan = document.getElementById("typewriter");
const textArray = ["Halo", "Hello", "你好", "こんにちは"];
const typingDelay = 150;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 500);
    }
}

// === JALANKAN ANIMASI SAAT WEB DIMUAT ===
document.addEventListener("DOMContentLoaded", function() {
    // Jalankan efek ketik
    if(typedTextSpan) {
        setTimeout(type, 1000);
    }

    // Jalankan animasi scroll (Fade In)
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.15, 
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});