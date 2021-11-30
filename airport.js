const fs = require("fs");

class Airport {
  constructor(name) {
    this.name = name;
  }

  getInfo(callback) {
    //read the json file
    fs.readFile("./airportsData.json", (err, data) => {
      //return all airports as json object
      const airports = JSON.parse(data);
      //find airport whose iata code matches this airport name
      const airport = airports.find((airport) => airport.iata === this.name);
      callback(err, airport);
    });
  }
}

module.exports = Airport;
