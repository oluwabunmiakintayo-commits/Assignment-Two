function getType(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  return typeof value;
}





console.log(getType(42));            // "number"
console.log(getType("42"));          // "string"
console.log(getType(true));          // "boolean"
console.log(getType(null));          // "null"
console.log(getType(undefined));     // "undefined"
console.log(getType([1, 2, 3]));     // "array"
console.log(getType({ a: 1 }));      // "object"
console.log(getType(function () {})); // "function"
console.log(getType(NaN));           // "number"