// let outputAlert = alert('password kamu salah!');
// console.log('alert :', outputAlert);

// let outputConfirm = window.confirm("Apakah kamu mau mengulang program?");
// console.log('corfirm :', outputConfirm);

// let outputPromt = window.prompt("Masukkan pekerjaan kamu", "Programmer");
// console.log('prompt :', outputPromt);

// line break
// alert("Pilih operasi aritmatika :\n1. Perkalian\n2. Pembagian");
// alert(`Pilih operasi aritmatika :
// 1. Perkalian
// 2. Pembagian`);

let repeat = true;
do {
  let operasi = window.prompt(
    "Pilih operasi aritmatika :\n1. Perkalian\n2. Pembagian"
  );

  switch (Number(operasi)) {
    case 1:
      let nilai1 = Number(window.prompt("Masukkan nilai pertama"));
      let nilai2 = Number(window.prompt("Masukkan nilai kedua"));

      alert(
        `Hasil perkalian ${nilai1} dan ${nilai2} adalah ${nilai1 * nilai2}`
      );
      break;
    case 2:
      let nilai3 = Number(window.prompt("Masukkan nilai pertama"));
      let nilai4 = Number(window.prompt("Masukkan nilai kedua"));

      alert(
        `Hasil pembagian ${nilai3} dan ${nilai4} adalah ${nilai3 / nilai4}`
      );
      break;
    default:
      alert("operasi tidak diketahui");
  }

  repeat = window.confirm("Apakah kamu mau mengulang program?");
} while (repeat);
