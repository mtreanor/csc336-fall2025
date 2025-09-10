console.log("This is printing from my javascript file");

let demoBoxes = document.getElementsByClassName("demo-box");
console.log(demoBoxes.length);

let clickCount = 0;

function clickedOnDemoBox() {
    clickCount++; // clickCount = clickCount + 1;
    let topAreaDiv = document.getElementById("top-area");
    topAreaDiv.innerText = clickCount;
}