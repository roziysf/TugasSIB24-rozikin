// Ambil elemen-elemen yang diperlukan
const form = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit-button");


function goToForm() {
  window.location.href = "product-responsive.html"; // Mengalihkan ke halaman formulir
}

// Tambahkan event listener untuk mengubah tampilan saat ukuran layar berubah
window.addEventListener("resize", function () {
  adjustLayout();
});

// Fungsi untuk menyesuaikan tata letak halaman sesuai dengan ukuran layar
function adjustLayout() {
  if (window.innerWidth < 768) {
    // Tambahkan style untuk layar kecil
    form.style.width = "80%";
    form.style.margin = "20px auto";
  } else {
    // Kembalikan style awal untuk layar besar
    form.style.width = "50%";
    form.style.margin = "50px auto";
  }
}

// Panggil fungsi adjustLayout saat halaman dimuat
adjustLayout();
