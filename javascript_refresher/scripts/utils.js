// console.log("Hello World!")

// objects on javascript
const userName = "Max";
const userAge = 34; 

const user = {
    name: "Max",
    age: 34,
    greet() {
        console.log("Hello");
        console.log(this.age);
    }
};

console.log(user.name);
user.greet();


class User {
    // you can add a constructor function
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hi");
    }
}

const user1 = new User("Emmanuel", 35);
console.log(user1);
user1.greet();


// Arrays
const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0])
// use for loop
for (let i = 0; i < hobbies.length; i += 1){
    console.log(hobbies[i]);
}

// push method
hobbies.push("Working");
console.log(hobbies);

// find index method
const sportsIndex = hobbies.findIndex((item) => item === "Sports");

console.log(sportsIndex);

// map method
const newHobbies = hobbies.map((item) => ({text: item}));
console.log(newHobbies);
