const Airport = require("./airport3");

describe("Airport class", () => {
  test("can get information like the city from an airport instance", async () => {
    const CDG = new Airport("Paris");
    expect(CDG.city).toEqual("Paris");
  });
});
