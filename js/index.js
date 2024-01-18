document.addEventListener("DOMContentLoaded", function () {
    var layar = document.getElementById("layar");
    var result = document.getElementById("result");
    var tombolAngka = document.querySelectorAll(".angka");
    var tombolReset = document.getElementById("reset");
    var tombolHapus = document.getElementById("hapus");
    var tombolLuas = document.getElementById("hitung-luas");
    var tombolKeliling = document.getElementById("hitung-keliling");

    tombolAngka.forEach(function (button) {
        button.addEventListener("click", function () {
            var nilaiTombol = this.value;
            layar.value += nilaiTombol;
        });
    });

    tombolReset.addEventListener("click", function () {
        layar.value = "";
        result.innerHTML = "";
    });

    tombolHapus.addEventListener("click", function () {
        layar.value = layar.value.slice(0, -1);
    });

    tombolLuas.addEventListener("click", function () {
        var nilai = parseFloat(layar.value);

        if (!isNaN(nilai)) {
            var hasil = Math.pow(nilai, 2);
            layar.value = hasil;
            result.innerHTML = "L: " + hasil;
        } else {
            layar.value = "Masukkan nilai yang valid.";
        }
    });

    tombolKeliling.addEventListener("click", function () {
        var nilai = parseFloat(layar.value);

        if (!isNaN(nilai)) {
            var hasil = nilai * 4;
            layar.value = hasil;
            result.innerHTML = "K: " + hasil;
        } else {
            layar.value = "Masukkan nilai yang valid.";
        }
    });
});
