// Fungsi menghitung luas segitiga
function hitungLuasSegitiga(alas, tinggi) {
  return 0.5 * alas * tinggi;
}

// Fungsi menghitung volume kubus
function hitungVolumeKubus(sisi) {
  return Math.pow(sisi, 3);
}

// Fungsi menghitung volume tabung
function hitungVolumeTabung(jariJari, tinggi) {
  return Math.PI * Math.pow(jariJari, 2) * tinggi;
}

// Contoh penggunaan fungsi
const luasSegitiga = hitungLuasSegitiga(6, 8);
const volumeKubus = hitungVolumeKubus(5);
const volumeTabung = hitungVolumeTabung(3, 10);

console.log("Luas Segitiga:", luasSegitiga);
console.log("Volume Kubus:", volumeKubus);
console.log("Volume Tabung:", volumeTabung);

/* // Fungsi menghitung luas segitiga
function hitungLuasSegitiga(alas, tinggi) {
    return 0.5 * alas * tinggi; // Rumus luas segitiga: 0.5 * alas * tinggi
}

// Fungsi menghitung volume kubus
function hitungVolumeKubus(sisi) {
    return Math.pow(sisi, 3); // Rumus volume kubus: sisi^3
}

// Fungsi menghitung volume tabung
function hitungVolumeTabung(jariJari, tinggi) {
    return Math.PI * Math.pow(jariJari, 2) * tinggi; // Rumus volume tabung: π * jari-jari^2 * tinggi
}

// Contoh penggunaan fungsi
const luasSegitiga = hitungLuasSegitiga(6, 8); // Menghitung luas segitiga dengan alas = 6 dan tinggi = 8
const volumeKubus = hitungVolumeKubus(5);      // Menghitung volume kubus dengan sisi = 5
const volumeTabung = hitungVolumeTabung(3, 10); // Menghitung volume tabung dengan jari-jari = 3 dan tinggi = 10

console.log("Luas Segitiga:", luasSegitiga);
console.log("Volume Kubus:", volumeKubus);
console.log("Volume Tabung:", volumeTabung);
 */
