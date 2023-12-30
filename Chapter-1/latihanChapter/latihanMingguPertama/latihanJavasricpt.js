// single line comments

//menghitung luas lingkarang

/* fungsi ini menghitung luar dari sebuah lingkaran .
parameter nya adalah: 
- r: jari jari dari sebuah linkaran
*/

function luasLingkaran(r) {
  const pi = 22 / 7; // 3.14
  return pi * r * r;
}

const radius = 5; // Replace this with the desired radius
const area = luasLingkaran(radius);

console.log("The area of the circle with radius", radius, "is", area);

// variabel var

// 1 scope
var diskon = 500; // global scope
if (true) {
  var diskon = 300; // global scope
}
console.log(diskon);
/* output: 300, karena var adalah global scope */

/* sebelum ada es6, solusinya membuat function scope -> local scope  */
var diskon = 500; // global scope
function diskonScope() {
  var diskon = 300; // local scope
  console.log(diskon); // 300
}
diskonScope();
console.log(diskon); // 500

// 2 reassigned dan redeclared
var name; // deklarasi
console.log(name); // undefined

name = "bot"; // assigment
console.log(name); // bot

var name = "bot sabrina"; // redeclared dan reassiigned
console.log(name); // bot sabrina

// 3 hoisting
name = "mentor sabrina"; // variabel di-assign deluan
var name; // kemudian baruu dideklarasi
console.log(name); // mentor sabrina

/* dibelkang layar terjadi hoisting */
var name;
name = "mentor sabrina";
console.log(name); // bot sabrina

// variabel let
/* buat variabel yang langsung kita kasih nilai */
let pesan = "hello wolrd";
console.log(pesan);

/* buat banyak variabel sekaligus */
let nama = "sabrina";
umur = 25;
jenisKelamin = "perempuan";

console.log(`${nama}, ${umur}, ${jenisKelamin}`);

// 1 scope let
let diskon = 500;
if (true) {
  // tanda awal scope
  let diskon = 300; // hanya bisa diakses dalam scope
  console.log(diskon);
} // tanda akhir scope
console.log(diskon);

// 2 reassigned dan redeclared
let name; // deklarasi
console.log(name); // undefined
name = "bot"; // assigment
console.log(name);
name = "bot sabrina"; // reassigned
console.log(name);
let name = "mentor sabrina"; // gabisa dideklarasi
console.log(name);

// 3 hoisting
// contoh pertama di codesandbox.io
name = "bot"; // assigmnt
let name; // deklarasi
console.log(name);

name = "bot"; // assigment
let name; // deklarasi
console.log(name);
// gabisa diakses sebelum mendapakatkan inisilisasi nama

let name = "bot"; // inisilisasi
console.log(name); //bot

/* dalam function juga bakal menghasilkan error.
Hal ini karena di belakang layar, sebenarnya JavaScript
mendeklarasikan variabel tersebut ke atas tanpa value
sehingga menghasilkan undefined.
Tapi, kondisi ini justru berguna banget buat kita lho.
Soalnya, kita bisa merevisi kode sesuai kaidah yang baik.
Karena itu, ada baiknya sejak awal variabel sudah harus
dideklarasikan atau diinisialisasi dengan sebuah value. */

// contoh 2
let message = "hello";
function grettings() {
  console.log(message);
  let message = "hello world";
}
grettings();

//setelah direvisi
let message2 = "hello";
function grettings() {
  let message2 = "hello world";
  console.log(message2);
}
grettings();

// variable const
/* Dalam mendefinisikan variabel konstan, kita diwajibkan
untuk langsung memasukkan nilai dari variabel
tersebut.  */

const bumi = "bulat";
const aku = "ganteng";
const pi = 3.14;

// uppercase constant
/* Dalam beberapa kasus, kita dianjurkan untuk memakai
variabel konstan. Contohnya penggunaan alias supaya
kita lebih mudah mengingatnya.
Variabel konstan seperti itu biasanya diberi nama
menggunakan garis bawah (_) untuk spasi.
Selanjutnya, mari kita buat konstanta untuk warna
dalam format yang disebut "web" (heksadesimal). */

const WARNA_MERAH = "#F00";
const WARNA_BIRU = "#00F";
const WARNA_HIJAU = "#0F0";
/* ketika kita ingin memanggil warna kita cuma perlu panggil variabel aja */
let warnaBaju = WARNA_MERAH;
console.log(warnaBaju);

// 1 scope const
const diskon = 500;
if (true) {
  const diskon = 300;
  console.log(diskon);
}
console.log(diskon);
