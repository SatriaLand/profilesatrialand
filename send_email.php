<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

// Load Composer's autoload file
require 'vendor/autoload.php';

// Memuat file .env
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = htmlspecialchars($_POST['nama']);
    $email = htmlspecialchars($_POST['email']);
    $subjek = htmlspecialchars($_POST['subjek']);
    $pesan = htmlspecialchars($_POST['pesan']);

    // Membuat instance PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Aktifkan mode debug untuk mempermudah troubleshooting
        $mail->SMTPDebug = 0; // Debug level (0 berarti tidak ada output debug)

        // Pengaturan server SMTP
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com'; // Ganti dengan host SMTP
        $mail->SMTPAuth   = true;
        $mail->Username   = $_ENV['SMTP_EMAIL'];  // Ambil dari .env
        $mail->Password   = $_ENV['SMTP_PASSWORD'];  // Ambil dari .env
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;  // Port untuk TLS (587)

        // Pengaturan email pengirim dan penerima
        $mail->setFrom($_ENV['SMTP_EMAIL'], 'Reynaldi Aditya Pratama'); // Pengirim
        $mail->addAddress('satrialandpalembang@gmail.com', 'Satria Land'); // Penerima

        // Isi email
        $mail->isHTML(true);
        $mail->Subject = $subjek;
        $mail->Body    = "Nama: $nama<br>Email: $email<br><br>$pesan";
        $mail->AltBody = "Nama: $nama\nEmail: $email\n\n$pesan";

        // Kirim email
        $mail->send();
        
        // Menampilkan popup menggunakan JavaScript
        echo "<script>window.onload = function() { alert('Pesan Anda telah berhasil dikirim!'); }</script>";
        
    } catch (Exception $e) {
        // Menangani error dengan menampilkan pesan error
        echo "<script>window.onload = function() { alert('Pesan tidak terkirim. Mailer Error: " . $mail->ErrorInfo . "'); }</script>";
    }
}
?>
