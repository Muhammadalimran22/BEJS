/* penjumlahan */
function penjumlahan(a, b) {
  return new Promise(function (resolve, reject) {
    const hasil = a + b;
    if (!isNaN(hasil)) {
      resolve(`hasil penjumlahan: ${hasil}`);
    } else {
      reject("input bukan angka");
    }
  });
}

penjumlahan(5, 5)
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(`error  : ${err}`);
  });

/* pengurangan */
function pengurangan(a, b) {
  return new Promise(function (resolve, reject) {
    const hasil = a - b;
    if (!isNaN(hasil)) {
      resolve(`hasil pengurangan: ${hasil}`);
    } else {
      reject("input bukan angka");
    }
  });
}

pengurangan(8, 5)
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(`error  : ${err}`);
  });

/* perkalian */
function perkalian(a, b) {
  return new Promise(function (resolve, reject) {
    const hasil = a * b;
    if (!isNaN(hasil)) {
      resolve(`hasil perkalian: ${hasil}`);
    } else {
      reject("input bukan angka");
    }
  });
}

perkalian(4, 2)
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(`error  : ${err}`);
  });

/* pembagian */
function pembagian(x, y) {
  return new Promise(function (resolve, reject) {
    if (y === 0) {
      reject("pembagian oleh 0 gabisa");
    } else {
      const hasil = x / y;
      resolve(`hasil pembagian: ${hasil}`);
    }
  });
}

pembagian(10, 2)
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(`error  : ${err}`);
  });

async function main() {
  try {
    // Mendaftarkan user 1 -> sukses
    let user1 = new User();
    let result1 = await user1.register("sabrina", "password123");
    console.log(result1);
    console.log(user1);

    // Mendaftarkan user 2 -> gagal karena username sudah dipakai
    let user2 = new User();
    try {
      let result2 = await user2.register("sabrina", "password123");
      console.log(result2);
    } catch (err) {
      console.error(err);
    }

    // Login user 1 -> gagal karena username salah
    let loggedInUser1 = new User();
    try {
      let result3 = await loggedInUser1.login("sebrina", "password123");
      console.log(result3);
    } catch (err) {
      console.error(err);
    }

    // Login user 2 -> gagal karena password salah
    let loggedInUser2 = new User();
    try {
      let result4 = await loggedInUser2.login("sabrina", "password1234");
      console.log(result4);
    } catch (err) {
      console.error(err);
    }

    // Login user 3 -> berhasil
    let loggedInUser3 = new User();
    let result5 = await loggedInUser3.login("sabrina", "password123");
    console.log(result5);
    console.log(loggedInUser3);
  } catch (err) {
    console.error(err);
  }
}

/*
 Skenario Pendaftaran:
Anda membuat objek user1 dan menggunakan objek ini untuk mendaftarkan pengguna dengan await user1.register("sabrina", "password123"). Ini bekerja dengan baik, dan pengguna berhasil didaftarkan dengan objek user1.
Namun, ketika Anda membuat objek user2 dan mencoba mendaftarkannya, Anda menggunakan objek yang berbeda, yaitu user2. Ini mengakibatkan objek user2 memiliki status pendaftaran yang berbeda dari user1, dan pesan kesalahan tentang username yang sudah dipakai tidak memengaruhi objek user1. Oleh karena itu, Anda melihat pesan "username sudah dipakai!" tetapi objek user1 tetap tidak berubah.

Skenario Login:
Ketika Anda mencoba melakukan login dengan loggedInUser1, Anda menggunakan objek yang berbeda dari objek user1 yang telah terdaftar. Oleh karena itu, pesan "Username tidak ditemukan!" akan muncul, tetapi ini tidak akan memengaruhi objek user1. Demikian pula, saat Anda mencoba login dengan loggedInUser2, objek yang berbeda digunakan, dan pesan "Password tidak sesuai!" akan muncul, tetapi tidak memengaruhi objek user1.
Dengan kata lain, setiap objek yang Anda buat memiliki status pendaftaran atau loginnya sendiri. Untuk membuat skenario ini bekerja dengan baik, Anda harus menggunakan objek yang sama untuk mendaftar dan login. Itu sebabnya saya memodifikasi kode Anda dalam jawaban sebelumnya untuk memastikan objek yang sama digunakan dalam skenario pendaftaran dan login. */
