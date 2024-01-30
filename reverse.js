const fullName = "Shawon Islam";

let reverse = "";
for (let letter of fullName) {
  console.log(letter);
  reverse = letter + reverse;
}
console.log(reverse);

for (let i = 0; i < fullName.length; i++) {
  console.log(fullName[i]);
  reverse = fullName[i] + reverse;
  console.log(reverse);
}
console.log(reverse);

const reversed = fullName.split("").reverse().join("");
console.log(reversed);
