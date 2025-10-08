// NOTE: the "import" syntax only works because we added "type": "module"
// to the package.json file.
import fs from "fs"; 

// This sample program will keep track of how many times this script
// has ever been run. It stores the number of times a file has been
// run inside of a file it creates and then reads named "program_count.txt".

// This will be the number 
let scriptRunCount = 0;

try {
    let fileContents = fs.readFileSync("program_count.txt", "utf-8");
    scriptRunCount = JSON.parse(fileContents);
} catch(error) {
    console.log("ERROR: fs.readFileSync threw an error. 'program_count.txt' doesn't exist.");
}

// Increment the count
scriptRunCount++;

console.log(scriptRunCount);

// Write the file with the updated count.
fs.writeFileSync("program_count.txt", JSON.stringify(scriptRunCount));