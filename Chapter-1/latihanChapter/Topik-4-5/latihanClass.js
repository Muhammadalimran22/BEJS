let dbUser = [];

class User {
  constructor() {
    this.username = "";
    this.password = "";
    this.email = "";
  }

  register(username, password, email) {
    // validasi username
    if (!username) return "username wajib diisi!";
    // validasi password
    if (!password) return "password wajib diisi!";

    // periksa apakah username sudah ada
    let existUser = dbUser.filter((user) => user.username === username);

    if (existUser.length) return `username ${username} sudah terdaftar!`;

    this.username = username;
    this.password = password;
    this.email = email;

    dbUser.push({
      username: this.username,
      password: this.password,
      email: this.email,
    });

    return "registrasi berhasil!";
  }

  login(username, password) {
    // cari pengguna dalam database
    let currentUser = dbUser.find((user) => user.username === username);

    if (!currentUser) {
      return "pengguna tidak ditemukan!";
    }

    if (currentUser.password !== password) {
      return "password salah!";
    }

    // atur properti pengguna saat ini
    this.username = currentUser.username;
    this.password = currentUser.password;
    this.email = currentUser.email;

    return "login berhasil!";
  }
}

let user1 = new User();
console.log(user1.register("tatangdev", "password123", "tatang@mail.com"));
console.log("user1", user1);

let user2 = new User();
console.log(user2.register("tatangdev", "password123", "tatang@mail.com"));
console.log("user2", user2);

console.log("dbUser", dbUser);

// uji login
let user3 = new User();
console.log(user3.login("tatangdev", "password123"));
console.log("user3", user3);
