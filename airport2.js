const fs = require("fs");

class Airport {
  constructor(name) {
    this.name = name;
  }

  getInfo() {
    return new Promise((resolve, reject) => {
      fs.readFile("./airportsData.json", (err, data) => {
        if (err) return reject(err);

        const airports = JSON.parse(String(data));
        const [airport] = Object.keys(airports)
          .filter((airportCode) => airports[airportCode].iata === this.name)
          .map((airportCode) => airports[airportCode]);

        resolve(airport);
      });
    });
  }
}

module.exports = Airport;
