// Latihan:
// Abstract -> Animal (dilarang membuat object langsung menggunakan kelas animal)
// Helper Jenis Habitat -> Terrestrial, Aquatic, dan Amphibious
/*  Terrestrial:
    Ini mengacu pada makhluk atau organisme yang hidup
    di darat atau di lingkungan daratan.
*/
/*  Aquatic:
    Ini merujuk pada makhluk atau organisme
    yang hidup di dalam air.
*/
/*  Amphibious:
    Ini adalah kata sifat yang digunakan untuk menggambarkan
    makhluk atau kendaraan yang dapat bergerak
    baik di darat maupun di air.
*/
// buat sub-class dari Animal menggunakan helper
// buat 4 object baru

// 1. buat kelas animal
class Animal {
  constructor(name, sound) {
    if (this.constructor === Animal)
      throw new Error(`can not initiate from abstrac class`);
    this.name = name;
    this.sound = sound;
  }

  action() {
    console.log(`say ${this.sound}`);
  }
}

// 2. buat helper Terrestrial
const Terrestrial = (Base) =>
  class extends Base {
    walk() {
      console.log(`${this.name} sedang berjalan-jalan`);
    }
  };
// 3. buat helper Aquatic
const Aquatic = (Base) =>
  class extends Base {
    swim() {
      console.log(`${this.name} sedang berenang`);
    }
  };
// 4. Buat kelas hewan yang hidup didarat
class Harimau extends Terrestrial(Animal) {
  constructor(name, sound) {
    super(name, sound);
    this.berkembangBiak = "Melahirkan";
  }

  action() {
    super.action();
    super.walk();
  }
}

const hewan1 = new Harimau("harimau sunda", "Rawrrr");
console.log(hewan1);
hewan1.action();

// 5. Buat kelas hewan yang hidup diair
class Hiu extends Aquatic(Animal) {
  constructor(name, sound) {
    super(name, sound);
    this.type = "Karnivora";
  }

  action() {
    super.action();
    super.swim();
  }
}
const hewan2 = new Hiu("Hiu", "Blub blub");
console.log(hewan2);
hewan2.action();

// 6. Buat kelas hewan yang bisa hidup didarat dan diair

class AnjingLaut extends Aquatic(Terrestrial(Animal)) {
  constructor(name, sound) {
    super(name, sound);
    this.type = "Karnivora";
  }

  action() {
    super.action();
    super.swim();
    super.walk();
  }
}

let hewan3 = new AnjingLaut("Anjing Laut", "ngik ngik");
console.log(hewan3);
hewan3.action();
// 7. buat 3 object.

class PersonalComputer {
  constructor(processor, gpu, ram) {
    this.processor = processor;
    this.gpu = gpu;
    this.ram = ram;
  }

  action() {
    console.log("menjalankan microsoft word!");
  }
}

let Desktop = (Base) =>
  class extends Base {
    turnOn() {
      console.log("colok listrik");
      console.log("colok monitor");
      console.log("colok keyboard");
      console.log("colok mouse");
      console.log("booting...");
    }
  };

let Portable = (Base) =>
  class extends Base {
    turnOn() {
      console.log("booting...");
    }
  };

let Gaming = (Base) =>
  class extends Base {
    gaming() {
      console.log("Playing Valorant");
      console.log("Playing Call of Duty");
      console.log("Playing Dota 2");
    }
  };

let Editing = (Base) =>
  class extends Base {
    editing() {
      console.log("Open Davinci Resolve");
      console.log("Open Photoshop");
      console.log("Open After Effect");
    }
  };

class LaptopGaming extends Portable(Gaming(PersonalComputer)) {
  constructor(processor, gpu, ram) {
    super(processor, gpu, ram);
    this.backlightKeyboard = "rgb";
  }

  action() {
    super.turnOn();
    super.gaming();
  }
}

class PCSultan extends Desktop(Gaming(Editing(PersonalComputer))) {
  constructor(processor, gpu, ram) {
    super(processor, gpu, ram);
    this.backlightKeyboard = "rgb";
  }

  action() {
    super.turnOn();
    super.gaming();
    super.editing();
  }
}

let rogStrix = new LaptopGaming("core i5 13500", "RTX 4070", "16GB");
console.log(rogStrix);
rogStrix.action();

let fullAMD = new PCSultan("AMD Ryzen 7900x", "Radeon RX 7900", "64GB");
console.log(fullAMD);
fullAMD.action();
