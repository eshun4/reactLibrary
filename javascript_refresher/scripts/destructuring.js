// const userNameData = ["Kofi", "Junior", "Eshun"];

// const firstName = userNameData[0];
// const lastName = userNameData[2];

// ABove code can be shortened
const [firstName, middleName, lastName] = ["Kofi", "Junior", "Eshun"];

console.log(firstName);
console.log(lastName);

// this also exists for objects
// for objects use the field names unlike the arrays. Use same property names.
// you could also use an alias by using a colon (:)
const {name: userName, age} = {
    name: "Kofi",
    age: 34
};

console.log(userName);
console.log(age);


// function storeOrder(order) {
//   localStorage.setItem('id', order.id);
//   localStorage.setItem('currency', order.currency);
// }
// Instead of accessing the order properties via the "dot notation" inside the storeOrder function body, you could use destructuring like this:

function storeOrder({id, currency}) { // destructuring
  localStorage.setItem('id', id);
  localStorage.setItem('currency', currency);
}

// The spread operator
const hobbies = ["Hobbies", "Cooking"];

const newHobbies = ["Reading"];
const mergedHobbies = [...hobbies, ...newHobbies];

console.log(mergedHobbies);

// The spread operator also works with objects not only arrayse
const user = {
    name: "Kofi",
    age: 34
};

const extendedUser = {
    isAdmin: true,
    ...user
};

console.log(extendedUser);

for (const hobby of hobbies) {
    console.log(hobby);
}

function handleTimeOut() {
    console.log("Timed Out");
}

const handleTimeOut2 = () => {
    console.log("Timed Out... again");
}
// if you defined the function before using it, use it in the parent function by omitting the parenthesis
// Using functions as values
setTimeout(handleTimeOut, 2000);
setTimeout(handleTimeOut2, 3000);


// it also works for function you create by yourself
function greeter(greetFn) {
    greetFn();
}

greeter(() => console.log("Hi"));

// you can define functions inside of functions
function init() {
    function greet() {
        console.log("Hi");
    }
    greet();
}

init();

// reference vs premitive values
let userMessage = "Hello!";
hobbies.push("Working");
console.log(hobbies);