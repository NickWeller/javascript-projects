const hello = require('../hello.js');

describe("hello world test", function(){
  
  test("should return custom message when name is specified", function() {
    expect(hello("Jest")).toBe("Hello, Jest!");
  });
});
