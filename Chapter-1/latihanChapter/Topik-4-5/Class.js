class Human {
  // static property
  static jumlahTangan = 2;
  static jumlahKaki = 2;
  static punyaHidung = true;

  // static method
  static berjalan() {
    return "Manusia sedang berjalan";
  }
  static bernyayi() {
    return "Manusia sedang  bernyayi";
  }

  constructor(nama, umur) {
    // instance property
    this.nama = nama;
    this.umur = umur;
  }

  // intance method
  sapa(nama) {
    return `Halo ${nama}, nama saya adalah ${this.nama}`;
  }
}

// memanggil static property
console.log(Human.jumlahTangan);
console.log(Human.jumlahKaki);
console.log(Human.punyaHidung);

// memanggil static method
console.log(Human.berjalan());
console.log(Human.bernyayi());

// membuat objek baru menggunakan class Human
let human1 = new Human("Gamal", 24);
let human2 = new Human("Cantika", 21);

// memanggil instance property
console.log(human1.nama);
console.log(human2.nama);

// memanggil instance method
console.log(human1.sapa("Sabrina"));
console.log(human2.sapa("Alex"));
