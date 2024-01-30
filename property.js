const person = {
  name: "Shawon",
  age: 25,
  city: "Islamabad",
  profession: "Web Developer",
  salary: 25000,
  married: false,
  "fav places": ["Chandpur", "Comilla"],
};
console.log(person);
console.log(`Your profession: ${person.profession}`);

console.log(person["name"]);
console.log(person["fav places"]);

const keyName = "salary";

console.log(person[keyName]);
