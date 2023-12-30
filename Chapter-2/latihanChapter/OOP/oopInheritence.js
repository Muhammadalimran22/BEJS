class Human {
  constructor(name, addres) {
    this.name = name;
    this.addres = addres;
  }

  introduce() {
    console.log(`hello, my name is ${this.name}`);
  }

  work() {
    console.log("working...");
  }
}

class Progammer extends Human {
  constructor(name, addres, bahasaPemograman) {
    super(name, addres);
    this.bahasaPemograman = bahasaPemograman;
  }

  introduce(withDetail) {
    super.introduce();
    console.log(withDetail ? "i can do " + withDetail : "input salah");
  }

  code() {
    console.log(
      "code some " +
        this.bahasaPemograman[
          Math.floor(Math.random() * this.bahasaPemograman.length)
        ]
    );
  }
}

let be = new Progammer("alif", "jakarta", [
  "javascript",
  "go",
  "pyhton",
  "java",
  "php",
]);

console.log(be.name);
console.log(be.addres);
console.log(be.bahasaPemograman);
be.introduce("yoga");
be.code();

class backendDeveloper extends Progammer {
  constructor(name, addres, bahasaPemograman) {
    super(name, addres, bahasaPemograman);
  }

  code(endpoint) {
    console.log(`${this.name} build ${endpoint}`);
  }
}

let ran = new backendDeveloper("imran", "indonesia", "malaya", "mamarika");

ran.code("register");
ran.introduce("register");
