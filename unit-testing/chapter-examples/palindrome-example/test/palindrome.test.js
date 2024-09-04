const isPalindrome = require("../palindrome.js");

describe("testing isPalindrome", function () {

    test("should return true for a single letter", function() {
        expect(isPalindrome("a")).toBe(true);
    });

    test("should return true for a single letter repeated", function() {
        expect(isPalindrome("aaa")).toBe(true);
    });

    test("should return true for a simple palindrome", function() {
        expect(isPalindrome("aba")).toBe(true);
    });

    test("should return true for a long palindrome", function() {
        expect(isPalindrome("tacocat")).toBe(true);
    });

    test("should return false for a nonpalindrome", function() {
        expect(isPalindrome("fake")).toBe(false);
    });

    test("should return an empty string as a palindrome", function() {
        expect(isPalindrome("")).toBe(true);
    });
});
