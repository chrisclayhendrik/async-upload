const Airport = require("./airport2");

describe("Airport class", () => {
  test("airports have a city", () => {
    const CDG = new Airport("CDG");
    return CDG.getInfo()
      .then((info) => {
        expect(info.city).toEqual("Paris");
      })
      .catch((err) => {
        expect(err).toBeNull();
      });
  });
});
