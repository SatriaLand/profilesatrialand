// JavaScript untuk membuka/menutup FAQ
const faqItems = document.querySelectorAll('.faq-item');
    
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    // Toggle class open untuk menampilkan/menyembunyikan jawaban
    item.classList.toggle('open');
    question.classList.toggle('open');
  });
});

// Ambil elemen tombol panah ke atas
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Fungsi untuk menampilkan tombol ketika pengguna menggulir
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block"; // Menampilkan tombol
  } else {
    scrollTopBtn.style.display = "none"; // Menyembunyikan tombol
  }
};

// Fungsi untuk scroll ke atas ketika tombol ditekan
scrollTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});