// Fungsi untuk mencetak pola segitiga
function printSegitiga(tinggi) {
  // Segitiga 1
  console.log("Segitiga 1");
  // Loop untuk baris dari 1 sampai tinggi
  for (let i = 1; i <= tinggi; i++) {
    let row = "";
    // Loop untuk menambahkan "*" sebanyak nilai i pada baris saat ini
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    // Cetak baris yang telah dibuat
    console.log(row);
  }

  // Segitiga 2
  console.log("Segitiga 2");
  // Loop untuk baris dari tinggi sampai 1
  for (let i = tinggi; i >= 1; i--) {
    let row = "";
    // Loop untuk menambahkan "*" sebanyak nilai i pada baris saat ini
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    // Cetak baris yang telah dibuat
    console.log(row);
  }

  // Segitiga 3
  console.log("Segitiga 3");
  // Loop untuk baris dari 1 sampai tinggi
  for (let i = 1; i <= tinggi; i++) {
    let row = "";
    // Loop untuk menambahkan spasi pada awal baris sebanyak nilai i
    for (let j = 1; j < i; j++) {
      row += "  ";
    }
    // Loop untuk menambahkan "*" sebanyak tinggi - i + 1 pada baris saat ini
    for (let j = i; j <= tinggi; j++) {
      row += "* ";
    }
    // Cetak baris yang telah dibuat
    console.log(row);
  }

  // Segitiga 4
  console.log("Segitiga 4");
  // Loop untuk baris dari tinggi sampai 1
  for (let i = tinggi; i >= 1; i--) {
    let row = "";
    // Loop untuk menambahkan spasi pada awal baris sebanyak nilai i
    for (let j = 1; j < i; j++) {
      row += "  ";
    }
    // Loop untuk menambahkan "*" sebanyak tinggi - i + 1 pada baris saat ini
    for (let j = i; j <= tinggi; j++) {
      row += "* ";
    }
    // Cetak baris yang telah dibuat
    console.log(row);
  }
}

// Tinggi segitiga yang diinginkan
const tinggiSegitiga = 6;
// Memanggil fungsi untuk mencetak pola segitiga dengan tinggi yang ditentukan
printSegitiga(tinggiSegitiga);
