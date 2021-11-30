const { readFile } = require("fs/promises");

class Airport {
  constructor(city) {
    this.city = city;
  }
  async getInfo() {
    try {
      const data = await readFile(`./airportsData.json`);
      const airports = parseJSON(data);
      const airport = airports.find((airport) => airport.iata === this.city);
      return airport;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Airport;
