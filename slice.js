const address = "Adalot Para";
const part = address.slice(2, 5);
console.log(part);

const sentence = "I am a good and hardworking person";
console.log(sentence.split());
console.log(sentence.split(""));
console.log(sentence.split(" ")); //Split with whitespace
console.log(sentence.split("a"));
const friends = "a,b,c,d,e";
const friendsArray = friends.split(",");
console.log(friendsArray);
console.log(typeof friendsArray);

const realFriends = ["a", "b", "c", "d", "e"];
console.log(realFriends.join("*"));

const firstName = "Shawon";
const lastName = "Islam";
console.log(firstName + " " + lastName);
console.log(firstName.concat(" ").concat(lastName));

console.log(lastName.includes('a'));
