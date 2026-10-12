const totalSeconds = 98765;

const days = Math.floor(totalSeconds / 86400);
const hours = Math.floor((totalSeconds % 86400) / 3600);
const minutes = Math.floor((totalSeconds % 3600) / 60);
const seconds = totalSeconds % 60;

const label = (n, word) => n + " " + word + (n === 1 ? "" : "s");

console.log(
  label(days, "day") + ", " + label(hours, "hour") + ", " +
  label(minutes, "minute") + ", " + label(seconds, "second")
);
// 1 day, 3 hours, 26 minutes, 5 seconds














let total = 0;

total += 40;
total += 35;
total += 25;
console.log("Items total:", total.toFixed(2));      // 100.00

total -= total * 0.10;
console.log("After 10% discount:", total.toFixed(2)); // 90.00

total *= 1.075;
console.log("After 7.5% VAT:", total.toFixed(2));   // 96.75

total /= 3;
console.log("Each person pays:", total.toFixed(2)); // 32.25