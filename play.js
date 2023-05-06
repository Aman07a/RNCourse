const person = {
  name: "Aman",
  age: 22,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

const hobbies = ["Sports", "Coding"];
// for (let hobby of hobbies) {
//   console.log(hobby);
// }
console.log(hobbies.map((hobby) => "Hobby: " + hobby));
console.log(hobbies);
