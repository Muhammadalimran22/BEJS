let users = [];

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  register(username, password) {
    return new Promise((resolve, reject) => {
      let user = users.filter((v) => {
        return v.username == username;
      });

      if (user.length) {
        return reject("username sudah dipakai!\n");
      }

      this.username = username;
      this.password = password;
      users.push({
        username: username,
        password: password,
      });

      resolve("user berhasil didaftarkan!");
    });
  }

  // Buatlah fungsi login yang menerapkan promise
  // kriteria :
  // 1. reject jika username tidak ditemukan
  // 2. reject jika password tidak sesuai
  // 3. set username dan password jika username dan password sesuai
  // 4. resolve jika username dan password sesuai
  login(username, password) {
    return new Promise((resolve, reject) => {
      let user = users.find((v) => {
        return v.username === username;
      });

      if (!user) {
        return reject("username tidak ditemukan!");
      }

      if (user.password !== password) {
        return reject("password tidak sesuai!");
      }

      // Jika username dan password sesuai, set nilai pada instance User
      this.username = username;
      this.password = password;

      resolve("login berhasil!");
    });
  }
}

async function main() {
  try {
    // mendaftarkan user 1 -> sukses
    let user1 = new User();
    let result1 = await user1.register("sabrina", "password123");
    console.log(result1);
    console.log(user1); // {username:"sabrina",passowrd:"password123"}

    // mendaftarkan user 2 -> gagal karena username sudah dipakai
    let user2 = new User();
    let result2 = await user2.register("sabrina", "password123");
    console.log(result2);
    console.log(user1); // null
  } catch (err) {
    console.error(err);
  }

  try {
    // login user 1 -> gagal karena username salah
    let loggedInUser1 = new User();
    let result3 = await loggedInUser1.login("sebrina", "password123");
    console.log(result3);
    console.log(loggedInUser1); // null

    // login user 2 -> gagal karena password salah
    let loggedInUser2 = new User();
    let result4 = await loggedInUser2.login("sabrina", "password1234");
    console.log(result4);
    console.log(loggedInUser2); // null

    // login user 3 -> berhasil
    let loggedInUser3 = new User();
    let result5 = await loggedInUser3.login("sabrina", "password123");
    console.log(result5);
    console.log(loggedInUser3); // {username:"sabrina",passowrd:"password123"}
  } catch (err) {
    console.log(err);
  }
}

main();
