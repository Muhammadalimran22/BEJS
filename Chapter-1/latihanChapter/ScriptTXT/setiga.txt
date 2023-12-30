function printSegitiga(tinggi) {
  console.log("Segitiga 1");
  for (let i = 1; i <= tinggi; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }

  console.log("Segitiga 2");
  for (let i = tinggi; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }

  console.log("Segitiga 3");
  for (let i = 1; i <= tinggi; i++) {
    let row = "";
    for (let j = 1; j < i; j++) {
      row += "  ";
    }
    for (let j = i; j <= tinggi; j++) {
      row += "* ";
    }
    console.log(row);
  }

  console.log("Segitiga 4");
  for (let i = tinggi; i >= 1; i--) {
    let row = "";
    for (let j = 1; j < i; j++) {
      row += "  ";
    }
    for (let j = i; j <= tinggi; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

const tinggiSegitiga = 6;
printSegitiga(tinggiSegitiga);
