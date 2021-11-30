const Airport = require("./airport");

describe("Airport object", () => {
  const testAirport2 = new Airport("CDG");

  test("airports have a country", (done) => {
    //run getInfo method
    testAirport2.getInfo((err, data) => {
      //log this airport info to console
      console.log(data);
      //expect error to be null
      expect(err).toBeNull();
      //expect the airport country to be FR
      expect(data.country).toEqual("FR");
      //end asynchrounous test
      done();
    });
  });
});