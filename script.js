// Ambil semua gambar di dalam carousel
const slides = document.querySelectorAll('#carousel img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Indeks gambar yang sedang ditampilka
let index = 0;

// menggunakan javascript DOM untuk membuat carousel
// Fungsi untuk menampilkan gambar pada indeks tertentu
function showImage(indexToShow) {
    // Pastikan indeks tidak melebihi jumlah gambar atau kurang dari 0
    if (indexToShow >= slides.length) {
        indexToShow = 0;
    } else if (indexToShow < 0) {
        indexToShow = slides.length - 1;
    }

    // Sembunyikan semua gambar
    slides.forEach(img => {
        img.style.display = 'none';
    });

    // Tampilkan gambar yang sesuai dengan indeks
    slides[indexToShow].style.display = 'block';
    index = indexToShow; // Update indeks
}

// Panggil fungsi showImage saat halaman dimuat
showImage(index);

// Fungsi untuk menampilkan gambar berikutnya
function nextSlide() {
    showImage(index + 1);
}

// Fungsi untuk menampilkan gambar sebelumnya
function prevSlide() {
    showImage(index - 1);
}

// Tambahkan event listener untuk tombol next
nextBtn.addEventListener('click', nextSlide);

// Tambahkan event listener untuk tombol previous
prevBtn.addEventListener('click', prevSlide);

// Fungsi untuk mengganti gambar secara otomatis setiap beberapa detik
function autoSlide() {
    nextSlide(); // Panggil fungsi nextSlide untuk menampilkan gambar berikutnya
}

// Jalankan fungsi autoSlide setiap 3 detik
setInterval(autoSlide, 3000);

// Fungsi alert saat halaman dimuat
window.onload = function() {
    alert("Selamat datang di halaman web kami!");

    setTimeout(function() {
        alert("Statement baris kedua");
    }, 100);
};

// Fungsi untuk melakukan penjumlahan
function sum() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 + num2;
    document.getElementById("result").innerHTML = "Hasil penjumlahan: " + result;
}

// Fungsi untuk melakukan perkalian
function multiply() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 * num2;
    document.getElementById("result").innerHTML = "Hasil perkalian: " + result;
}

// Fungsi untuk operator logika AND
function andOperator() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 > 5 && num2 < 10;
    document.getElementById("result").innerHTML = "Hasil operator logika AND: " + result;
}

// Fungsi untuk operator logika OR
function orOperator() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 > 5 || num2 < 10;
    document.getElementById("result").innerHTML = "Hasil operator logika OR: " + result;
}

// Fungsi untuk mengecek bilangan prima
function checkPrime() {
    var num = parseInt(document.getElementById("num1").value);
    var isPrime = true;
    if (num === 1) {
        isPrime = false;
    } else if (num > 1) {
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    } else {
        isPrime = false;
    }
    document.getElementById("result").innerHTML = "Is Prime: " + isPrime;
}

// Fungsi untuk menghitung faktorial
function calculateFactorial() {
    var num = parseInt(document.getElementById("num1").value);
    var factorial = 1;
    for (var i = 1; i <= num; i++) {
        factorial *= i;
    }
    document.getElementById("result").innerHTML = "Factorial: " + factorial;
}

// Fungsi untuk mengecek palindrom
function checkPalindrome() {
    var str = document.getElementById("num1").value.toString();
    var reversedStr = str.split('').reverse().join('');
    var isPalindrome = (str === reversedStr);
    document.getElementById("result").innerHTML = "Is Palindrome: " + isPalindrome;
}

// Fungsi untuk menghasilkan urutan Fibonacci
function generateFibonacci() {
    var length = parseInt(document.getElementById("num1").value);
    var sequence = [0, 1];
    for (var i = 2; i < length; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    document.getElementById("result").innerHTML = "Fibonacci Sequence: " + sequence.join(", ");
}

// ---------------------------------
window.onload = function() {
    alert("Selamat datang di halaman web kami!");

    setTimeout(function() {
        alert("Statement baris kedua");
    }, 100);
};