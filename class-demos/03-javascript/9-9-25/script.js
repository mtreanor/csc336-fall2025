console.log("This is printing from my javascript file");

let demoBoxes = document.getElementsByClassName("demo-box");
console.log(demoBoxes.length);

let clickCount = 0;

function clickedOnDemoBox() {
    clickCount++; // clickCount = clickCount + 1;
    let topAreaDiv = document.getElementById("top-area");
    topAreaDiv.innerText = clickCount;
}

// (This is a simplified, non-React example)
function myUseState(initialValue) {
  let value = initialValue;

  function updateValue(newValue) {
    value = newValue;
    // In React, this is where the re-render mechanism would be triggered
  }

  // It returns an array containing the value and the setter function
  return [value, updateValue];
}

// ❌ The WRONG way to use it (without destructuring)
// const stateArray = myUseState("Initial string");
// const textValue = stateArray[0]; // Accessing the value directly
// const setTextFunction = stateArray[1]; // Accessing the function

// ✅ The React way (using destructuring)
const [text, setText] = myUseState("Initial string");

// Accessing the value:
console.log(text); // Output: "Initial string" -> No parentheses needed!

// Calling the setter function:
setText("New string"); // Output: (updates the state)

console.log(text); 