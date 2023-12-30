class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function takeOff(altitude) {
  if (altitude > 10000) {
    throw new CustomError("ketinggian terlalu tinggi");
  } else if (altitude < 0) {
    throw new CustomError("ketinggian tidak valid");
  } else {
    return `Pesawat lepas landas menuju ketinggian ${altitude} meter`;
  }
}

function flightSimulation(altitude) {
  try {
    let status = takeOff(altitude);
    console.log(status);
  } catch (error) {
    console.log(error.message);
  }
}

// memanggil flightSimulation dengan beberapa nilai altitude
flightSimulation(12000);
flightSimulation(-500);
flightSimulation();
