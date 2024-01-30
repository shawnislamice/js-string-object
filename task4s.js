const myString = "Weather was exchanged with X or x neither y Or Y";
console.log(myString);
if (myString.includes("x") || myString.includes("X")) {
  myString = myString.replace("x", "y").replace("X", "y");
}
console.log(myString);
