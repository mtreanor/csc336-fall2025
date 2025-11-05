let x = -10;

// let y;
// if (x > 0) {
//     y = x;
// } else {
//     y = 0;
// }

// console.log(y);
// let y = (x > 0) ? y = x : y = 0;


// let fruits = () => ["apple", "banana", "coconut"];

function fruits() {
    return ["apple", "banana", "coconut"];
}
// Array destructuring
let [fruit1, fruit2, fruit3] = fruits();
console.log(fruit3);

//Object destructuring
let person = {
    name: "Mike",
    job: "professor"
}

let {name, job} = person;
console.log(job);


// Using map to iterate through an array

let numbers = [342, 234, 12, 23423, -1231];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
for (let number of numbers) {
    console.log(number);
}

numbers.forEach((element, index) => {
    console.log(element)
});

let newArray = number.map((element) => console.log(element));



