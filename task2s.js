let myString = "I am Shawon IslAm";
let count = 0;
for (let i = 0; i < myString.length; i++) {
  if (myString[i] === "a"||myString[i] === "A") {
    count++;
  }
}
console.log(`No of 'a' is ${count}`);
