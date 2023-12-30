function myDisplayer(value) {
  document.getElementById("demo").innerHTML = value;
}

// function calculator1(n1, n2) {
//   return n1 + n2;
// }

// let hasil = calculator1(5, 5);
// myDisplayer(hasil);

// function calculator2(n1, n2) {
//   myDisplayer(n1 + n2);
// }
// calculator2(10, 5);

// function calculator3(n1, n2, callback) {
//   callback(n1 + n2);
// }

// calculator3(10, 15, myDisplayer);
// calculator3(30, 15, function (n) {
//   console.log(n);
// });

// /* setTimeout */
// setTimeout(function () {
//   myDisplayer(
//     "This code will run after a delay of 2000 milliseconds (2 seconds)."
//   );
// }, 2000);

// /* setInterval */
// let counter = 0;
// const intervalId = setInterval(function () {
//   myDisplayer(`Counter: ${counter}`);
//   counter++;

//   if (counter === 5) {
//     clearInterval(intervalId); // Stops the interval after 5 iterations.
//   }
// }, 1000);

/* promise */
let balance = 1000;
function witdraw(nominal) {
  return new Promise(function (resolve, reject) {
    if (balance < nominal) {
      return reject("saldo kurang tod");
    }
    balance -= nominal;
    return resolve("uda berhasil");
  });
}

witdraw(5000)
  .then(function (data) {
    myDisplayer(`status: ${data}`);
    console.log(data);
  })
  .catch(function (err) {
    myDisplayer(`error: ${err}`);
    console.log(err);
  });

let name = new Promise((resolve) => resolve("joko"));

name.then((nickname) => {
  const fullName = `${nickname} widodo`;
  console.log(fullName);
});
