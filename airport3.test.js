const Airport = require("./airport3");

describe("Airport class", () => {
  test("can get information like the city from an airport instance", async () => {
    const CDG = new Airport("CDG");
    const airport = await CDG.getInfo();
    expect(airport.city).toEqual("Paris");
  });
});
