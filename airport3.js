const fs = require("fs");
const { readFile } = require("fs/promises");

class Airport {
  constructor(name) {
    this.name = name;
  }
  async getInfo() {
    try {
      const data = await readFile("./airportsData.json");
      const airports = JSON.parse(data);
      const airport = airports.find((airport) => airport.iata === this.name);
      return airport;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Airport;
