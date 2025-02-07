
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

  document.addEventListener('DOMContentLoaded', function () {
    // Deteksi apakah user menggunakan dark mode
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

    // Sesuaikan tampilan berdasarkan preferensi mode
    if (prefersDarkMode.matches) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.add('light-mode');
    }

    // Pantau perubahan preferensi mode
    prefersDarkMode.addEventListener('change', (e) => {
      if (e.matches) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
      } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
      }
    });
  });
   