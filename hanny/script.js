const rose = document.getElementById('rose');
const asciiArt = document.getElementById('ascii-art');
const loveContainer = document.getElementById('love-container'); // Menambahkan referensi ke elemen love-container


// Fungsi untuk membuat ASCII love secara dinamis
function createLove() {
  const love = document.createElement('div');
  love.textContent = '♥';
  love.classList.add('love');
  love.style.left = `${Math.random() * window.innerWidth}px`; // Posisi horizontal acak
  loveContainer.appendChild(love);

  // Hapus ASCII love setelah jatuh selesai
  love.addEventListener('animationiteration', () => {
    love.remove()
  });
}

// Membuat ASCII love secara berulang setiap beberapa detik
setInterval(createLove, 1000);

// Mengatur variabel untuk menyimpan status opacity
let visible = true;

// Fungsi untuk mengatur opacity elemen secara bergantian antara 0 dan 1
function blinkElements() {
  if (visible) {
    asciiArt.style.opacity = '0';
    rose.style.opacity = '0';
  } else {
    asciiArt.style.opacity = '1';
    rose.style.opacity = '1';
  }
  visible = !visible;
}

// Memanggil fungsi blinkElements setiap 1 detik
setInterval(blinkElements, 1000); // Ganti nilai 1000 sesuai dengan kecepatan kedip-kedip yang diinginkan

