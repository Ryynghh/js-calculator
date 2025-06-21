// Mengambil elemen input dengan id "inp" dari DOM dan menyimpannya ke dalam variabel input
let input = document.getElementById("inp");

// Mengambil semua elemen <button> dari halaman dan menyimpannya ke dalam variabel buttons
let buttons = document.querySelectorAll("button");

// Membuat variabel string kosong untuk menyimpan inputan kalkulasi
let string = "";

// Mengubah NodeList buttons menjadi array menggunakan Array.from
let arr = Array.from(buttons);

// Melakukan loop pada setiap elemen tombol yang ada di array
arr.forEach((button) => {
  // Menambahkan event listener 'click' ke setiap tombol
  button.addEventListener("click", (e) => {
    // Jika tombol yang diklik adalah "="
    if (e.target.innerHTML == "=") {
      // Menggunakan eval untuk menghitung ekspresi matematika dari string
      string = eval(string);
      // Menampilkan hasilnya di input
      input.value = string;
    }

    // Jika tombol yang diklik adalah "AC" (All Clear)
    else if (e.target.innerHTML == "AC") {
      // Mengosongkan string dan input
      string = "";
      input.value = string;
    }

    // Jika tombol yang diklik adalah "DEL" (Delete satu karakter terakhir)
    else if (e.target.innerHTML == "DEL") {
      // Menghapus karakter terakhir dari string
      string = string.substring(0, string.length - 1);
      // Menampilkan string yang sudah dipotong di input
      input.value = string;
    }

    // Jika tombol yang diklik adalah tombol angka atau operator lain
    else {
      // Menambahkan isi tombol ke string
      string += e.target.innerHTML;
      // Menampilkan string yang telah ditambah di input
      input.value = string;
    }
  });
});
