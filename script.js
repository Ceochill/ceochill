function openTab(tabName) {
    // 1. Sembunyikan semua konten tab terlebih dahulu
    let tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // 2. Hilangkan efek garis bawah/aktif dari semua tombol tab
    let tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // 3. Tampilkan konten tab yang sedang dipilih/diklik
    document.getElementById(tabName).style.display = "block";

    // 4. Tambahkan efek aktif ke tombol yang baru saja diklik
    event.currentTarget.classList.add("active");
}

// === FUNGSI UNTUK LIGHTBOX (LAYAR PENUH) ===

// Fungsi untuk membuka gambar penuh
function openModal(imageSrc) {
    let modal = document.getElementById("imageModal");
    let fullImage = document.getElementById("fullImage");
    
    // Tampilkan modal dan ganti sumber gambar
    modal.style.display = "flex"; 
    fullImage.src = imageSrc; 
}

// Fungsi untuk menutup gambar penuh
function closeModal() {
    let modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// === FUNGSI UNTUK MENAMPILKAN ROBLOX SHOWCASE ===
function toggleRobloxShowcase() {
    var showcase = document.getElementById("roblox-showcase");
    
    // Mengecek apakah showcase sedang disembunyikan
    if (showcase.style.display === "none" || showcase.style.display === "") {
        showcase.style.display = "block";
        // Scroll layar agar bagian ini langsung terlihat (smooth scroll)
        showcase.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        // Jika sedang tampil, maka sembunyikan kembali
        showcase.style.display = "none";
    }
}