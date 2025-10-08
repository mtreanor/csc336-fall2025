const fs = require("fs");  // Import module using "CommonJS"

console.log("Hello node!");

let randomNumbers = [];

// Read "randomNumbers.txt"
let fileContents = fs.readFileSync("./randomNumbers.txt", "utf8");
// console.log(fileContents);

randomNumbers = JSON.parse(fileContents);

console.log(randomNumbers[0]);

for (i = 0; i < 10; i++) {
    let rand = Math.random();
    randomNumbers[i] = rand;
    // console.log(randomNumbers[i]);
}

// let str = "";
// for (let rand of randomNumbers) {
//     str += rand + "\n";
// }
// fs.writeFileSync("randomNumbers.txt", str);

fs.writeFileSync("randomNumbers.txt", JSON.stringify(randomNumbers));

