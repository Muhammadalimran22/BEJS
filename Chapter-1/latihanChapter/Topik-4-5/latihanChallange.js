// variabel saldo
let saldo = 0;

// fungsi tambahSaldo
function tambahSaldo(n) {
  return saldo + n;
}

// fungsi kurangiSaldo
function kurangiSaldo(n) {
  return saldo - n;
}

let ulang = true;
do {
  // user memilih menu
  let menu = Number(
    window.prompt(
      "Silahkan pilih operasional:\n1. Tambahkan saldo\n2. Kurangi saldo"
    )
  );

  switch (menu) {
    case 1:
      let deposit = Number(
        window.prompt("Berapa nominal yang akan di depositkan?")
      );
      saldo = tambahSaldo(deposit);
      alert("Saldo kamu sekarang adalah Rp." + saldo);
      break;
    case 2:
      let kredit = Number(
        window.prompt("Berapa nominal yang akan di cairkan?")
      );
      saldo = kurangiSaldo(kredit);
      alert("Saldo kamu sekarang adalah Rp." + saldo);
      break;
    default:
      alert("menu tidak diketahui!");
  }

  ulang = confirm("Ulangi transaksi?");
} while (ulang);
