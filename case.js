const school = "Daffodil International School";
console.log(school);

const subject = "ICE";
const book = "Computer Networks";

if (subject.toLowerCase() === book.toLowerCase()) {
  console.log("Matched");
} else {
  console.log("Not Matched");
}

const string1 = "  water   ";
const string2 = "water";
if (string1.trim() === string2.trim()) {
  console.log("Matched");
} else {
  console.log("Not Matched");
}
