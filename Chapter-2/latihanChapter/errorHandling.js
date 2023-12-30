class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function terbang(ketinggian) {
  if (ketinggian > 10000) {
    throw new CustomError("ketinggian terlalu tinggi");
  }
  return "ketinggian masih aman";
}

try {
  let status = terbang(12000);
  console.log(status);
} catch (error) {
  console.log(typeof error);
  console.log(error.message); // Perbaiki bagian ini
}
