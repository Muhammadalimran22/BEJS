function randomKata(length) {
  let hasil = "";
  const karakter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const karakterPanjang = karakter.length;
  for (let i = 0; i < length; i++) {
    const randomKarakter = karakter.charAt(
      Math.floor(Math.random() * karakterPanjang)
    );
    hasil += randomKarakter;
  }
  return hasil;
}

const text = `dasar kamu anjeng binatang codingan bangsat asu
`;

for (let i = 0; i < 200; i++) {
  for (let i = 1; i <= text.length; i++) {
    let garis = text.substring(0, i);
    console.log(garis);
  }
  console.log(randomKata(5));
}
