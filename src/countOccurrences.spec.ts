import countOccurrences from "./countOccurrences";

test("lists letter of input string in object along with no. of occurences in string", () => {
  expect(countOccurrences('HELLO')).toStrictEqual({"e": 1, "o": 1, "h": 1, "l": 2});
  expect(countOccurrences('abcdabcd')).toStrictEqual({'a':2,'b':2,'c':2,'d':2});
  expect(countOccurrences('hi there')).toStrictEqual({'h':2,'i':1,'t':1,'e':2,'r':1});
});
