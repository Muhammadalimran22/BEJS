//script pada jsnya
// memulai program
console.log("Program menghitung Rata-rata");

// input jumlah nilai yang akan dihitung
const jumlahNilai = Number(prompt("Masukkan jumlah nilai yang akan dihitung:"));

// membuat variabel total = 0
let total = 0;

// membuat variabel bilanganKe, untuk melacak perulangan
let bilanganKe = 1;

// memulai looping sebanyak jumlah nilai
while (bilanganKe <= jumlahNilai) {
  // input nilai, simpan ke variable nilai
  const nilai = Number(prompt(`Masukkan nilai ke-${bilanganKe}:`));

  // Tambahkan nilai ke total
  total += nilai;

  // Increment bilanganKe
  bilanganKe++;
}

// menghitung rata-rata
const rataRata = total / jumlahNilai;

// menampilkan hasil
console.log(`Total nilai: ${total}`);
console.log(`Rata-rata nilai: ${rataRata.toFixed(2)}`);

// selesai
console.log("Program selesai");

// pseudocodenya
/* Start
   Display "Program Menghitung Rata-rata"
   
   // Input jumlah nilai yang akan dihitung
   Input jumlahNilai
   
   // Membuat variabel total = 0
   total ← 0
   
   // Membuat variabel bilanganKe, untuk melacak perulangan
   bilanganKe ← 1
   
   // Memulai looping sebanyak jumlah nilai
   while bilanganKe <= jumlahNilai do
      // Input nilai, simpan ke variable nilai
      Input nilai
      
      // Tambahkan nilai ke total
      total ← total + nilai
      
      // Increment bilanganKe
      bilanganKe ← bilanganKe + 1
   end while
   
   // Menghitung rata-rata
   rataRata ← total / jumlahNilai
   
   // Menampilkan hasil
   Display "Total nilai: " + total
   Display "Rata-rata nilai: " + rataRata
   
   Display "Program selesai"
End */
