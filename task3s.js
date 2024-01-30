const myMessage = "Shawon Islam";

const matched = myMessage.match("a" && "e" && "i" && "o" && "u");
if (matched) {
  console.log("All the vowels are exist");
} else {
  console.log("Some vowels are not exist");
}
