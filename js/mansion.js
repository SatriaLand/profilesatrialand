// Fungsi untuk format angka dengan titik pemisah ribuan
function formatNumber(input) {
    let value = input.value.replace(/[^\d]/g, ''); // Menghapus selain angka
    // Menambahkan titik setiap 3 digit
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    input.value = value;
  }

//KPR
  document.getElementById('kprForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Mengambil input dari form
    let hargaRumah = parseFloat(document.getElementById('hargaRumah').value.replace(/[^\d]/g, '')) || 0;
    let bunga = parseFloat(document.getElementById('bunga').value) || 0; // bunga tahunan dalam %
    let tenor = parseFloat(document.getElementById('tenor').value) || 0; // tenor dalam tahun
    let dpInput = document.getElementById('dp').value.replace(/\s/g, ''); // Mengambil input DP

    let dp;

    // Jika input DP dalam persen (misal "20%")
    if (dpInput.includes('%')) {
        let persen = parseFloat(dpInput.replace('%', ''));
        dp = (persen / 100) * hargaRumah;
    } else {
        dp = parseFloat(dpInput.replace(/[^\d]/g, '')) || 0;

        // Validasi DP dalam rupiah harus antara 1 juta - 75 juta
        if (dp < 1000000 || dp > 100000000) {
            alert("Jika DP dalam rupiah, harus antara Rp 1.000.000 hingga Rp 100.000.000!");
            return;
        }
    }

    // Validasi DP tidak boleh lebih besar dari harga rumah
    if (dp > hargaRumah) {
        alert("DP tidak boleh lebih besar dari harga properti!");
        return;
    }

    // Menghitung jumlah pinjaman setelah DP
    let pinjaman = hargaRumah - dp;

    // Menghitung total bunga berdasarkan tenor
    let bungaTotal = pinjaman * (bunga / 100) * tenor; // Total bunga selama tenor

    // Menghitung cicilan per bulan (bunga flat)
    let totalPembayaran = pinjaman + bungaTotal;
    let cicilanBulanan = totalPembayaran / (tenor * 12); // Cicilan per bulan

    // Menampilkan hasil simulasi
    document.getElementById('result').innerHTML = `
      <p><strong>Harga Properti:</strong> Rp ${hargaRumah.toLocaleString()}</p>
      <p><strong>Uang Muka (DP):</strong> Rp ${dp.toLocaleString()}</p>
      <p><strong>Pinjaman:</strong> Rp ${pinjaman.toLocaleString()}</p>
      <p><strong>Total Bunga:</strong> Rp ${bungaTotal.toLocaleString()}</p>
      <p><strong>Cicilan Per Bulan:</strong> Rp ${cicilanBulanan.toLocaleString()}</p>
      <p><strong>Total Pembayaran Selama ${tenor} tahun:</strong> Rp ${totalPembayaran.toLocaleString()}</p>
    `;
});
 
//Tabbed
function openTab(event, tabId) {
    const contents = document.getElementsByClassName("content");
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = "none";
      contents[i].classList.remove("active");
    }

    const tabs = document.getElementsByClassName("tab");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("active");
    }

    document.getElementById(tabId).style.display = "block";
    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");
  }

  document.addEventListener("DOMContentLoaded", () => {
    showSlides(slideIndex);
    document.querySelector(".tab").click(); // Open the first tab by default
  });

  //Slider
  var slider = tns({
    container: '.image-property-slide',
    items: 1,
    slideBy: 'page',
    autoplay: true,   // Auto slide aktif
    controls: false,  // Tidak pakai tombol prev/next
    nav: true,         // Dot navigasi aktif
    navPosition: 'bottom', // Posisi dot di bawah gambar
    autoplayButtonOutput: false, // Non-aktifkan autoplay button
  });

  