// Reading/writing files
// const fs = require("fs");
import * as fs from "fs";
import {Cat} from "./Cat.js";


let fileContents;
let accessCount;
try {
  fileContents = fs.readFileSync('file.txt', 'utf8');
  console.log('File contents:', fileContents);
  accessCount = JSON.parse(fileContents);
  accessCount++;
} catch (err) {
  if (err.code === 'ENOENT') {
    accessCount = 0;
  } else {
    // Re-throw other types of errors
    throw err;
  }
}
fs.writeFileSync("file.txt", JSON.stringify(accessCount));



async function main() {
  const data = await fs.promises.readFile("file.txt", "utf8");
  console.log("Async file read:", data);
}

main();




console.log("Arguments:", process.argv);
let [cmd, file, arg, count] = process.argv;
console.log(count);


let cat = new Cat("Mew Mew");
cat.hello();




import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Rock, paper, or scissors? ", (userChoice) => {
  const choices = ["rock", "paper", "scissors"];
  const ai = choices[Math.floor(Math.random() * 3)];
  console.log(`You chose ${userChoice}, AI chose ${ai}`);
  if (userChoice === ai) console.log("It's a tie!");
  else if (
    (userChoice === "rock" && ai === "scissors") ||
    (userChoice === "paper" && ai === "rock") ||
    (userChoice === "scissors" && ai === "paper")
  ) console.log("You win!");
  else console.log("You lose!");
  rl.close();
});