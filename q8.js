// ---------- Block 1: primitives (copying a value) ----------
let a = 10;
let b = a;
b = 20;
console.log(a, b); // 10 20

// ---------- Block 2: objects (copying a reference) ----------
let userOne = { name: "Amaka", age: 22 };
let userTwo = userOne;
userTwo.age = 40;
console.log(userOne.age); // 40

// ---------- (b) Fix with the spread operator ----------
let userThree = { name: "Amaka", age: 22 };
let userFour = { ...userThree };
userFour.age = 40;
console.log(userThree.age); // 22
console.log(userFour.age);  // 40

// ---------- Nested object: spread only makes a shallow copy ----------
let person = { name: "Amaka", address: { city: "Abuja" } };
let personCopy = { ...person };
personCopy.address.city = "Lagos";
console.log(person.address.city); // "Lagos" (original changed too!)

// ---------- Fix 1: spread the inner object too ----------
let person2 = { name: "Amaka", address: { city: "Abuja" } };
let person2Copy = { ...person2, address: { ...person2.address } };
person2Copy.address.city = "Lagos";
console.log(person2.address.city);     // "Abuja"
console.log(person2Copy.address.city); // "Lagos"

// ---------- Fix 2: deep copy with structuredClone ----------
let person3 = { name: "Amaka", address: { city: "Abuja" } };
let person3Copy = structuredClone(person3);
person3Copy.address.city = "Lagos";
console.log(person3.address.city);     // "Abuja"
console.log(person3Copy.address.city); // "Lagos"