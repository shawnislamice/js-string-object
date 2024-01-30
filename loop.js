const mobile = {
  brand: "Apple",
  price: 10000,
  processor: "Apple M1",
  storage: "512GB",
  camera: "12MP",
  battery: "4000mAh",
  screen: "1280x720",
};
for (let x in mobile) {
  //   console.log(x);
  console.log(mobile[x]);
}

const keys = Object.keys(mobile);
console.log(keys);
for (let x of keys) {
  console.log(x, " ",mobile[x]);
}

const pencil = new Object()
const rubber=Object.create({})