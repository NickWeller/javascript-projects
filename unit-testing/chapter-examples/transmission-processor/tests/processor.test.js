const processor = require("../processor.js");

describe("transmission processor", function () {
  test("Takes a string and returns an object", function () {
    let result = processor("9701::<4895842235>");
    expect(typeof result).toBe("object");
  });

  test("Should return -1 if tranmission does not contain ::", function () {
    let result = processor("4141452");
    expect(result).toBe(-1);
  });

  test()
});
