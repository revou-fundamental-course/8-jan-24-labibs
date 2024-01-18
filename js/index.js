document.addEventListener("DOMContentLoaded", function () {
    // Ambil elemen input
    var layar = document.getElementById("layar");
    var result = document.getElementById("result");
    // Ambil semua tombol dengan class "angka"
    var tombolAngka = document.querySelectorAll(".angka");
    // Ambil tombol dengan class "reset" dan "hapus"
    var tombolReset = document.getElementById("reset");
    var tombolHapus = document.getElementById("hapus");
    var tombolLuas = document.getElementById("hitung-luas");
    var tombolKeliling = document.getElementById("hitung-keliling");

    // Tambahkan event listener untuk setiap tombol angka
    tombolAngka.forEach(function (button) {
        button.addEventListener("click", function () {
            // Dapatkan nilai tombol dan tambahkan ke layar
            var nilaiTombol = this.value;
            layar.value += nilaiTombol;
        });
    });
    
    // Tambahkan event listener untuk tombol reset
    tombolReset.addEventListener("click", function () {
        // Mengosongkan nilai layar
        layar.value = "";
        result.innerHTML = "";
    });

    // Tambahkan event listener untuk tombol hapus
    tombolHapus.addEventListener("click", function () {
        // Menghapus satu digit dari belakang
        layar.value = layar.value.slice(0, -1);
    });

    tombolLuas.addEventListener("click", function () {
        // Ambil nilai dari layar
        var nilai = parseFloat(layar.value);

        // Periksa apakah nilai valid
        if (!isNaN(nilai)) {
            // Hitung luas (nilai pangkat 2)
            var hasil = Math.pow(nilai, 2);

            // Tampilkan hasil di elemen layar
            layar.value = hasil;
            result.innerHTML = "L: " + hasil;
        } else {
            // Tampilkan pesan kesalahan jika nilai tidak valid
            layar.value = "Masukkan nilai yang valid.";
        }
    });

    // Tambahkan event listener untuk tombol "hitung-keliling"
    tombolKeliling.addEventListener("click", function () {
        // Ambil nilai dari layar
        var nilai = parseFloat(layar.value);

        // Periksa apakah nilai valid
        if (!isNaN(nilai)) {
            // Hitung keliling (nilai dikali 4)
            var hasil = nilai * 4;

            // Tampilkan hasil di elemen layar
            layar.value = hasil;
            result.innerHTML = "K: " + hasil;
        } else {
            // Tampilkan pesan kesalahan jika nilai tidak valid
            layar.value = "Masukkan nilai yang valid.";
        }
    });
});
