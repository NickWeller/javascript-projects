const test = require('../checkFive.js');

describe("checkFive", function(){

  test("Checking to see if checkFive produces less than 5 if number is less than 5", function() {
    let output = checkFive(2);
    expect(output).toEqual("2 is less than 5");
  });
});