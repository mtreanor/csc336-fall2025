// Here is an example of how to store an array full of objects that have the 
// same structure. The webpage will later call a function that dynamically 
// adds HTML to the DOM representing this information. 
//
// This represents the principle that you shoudl separate your 'data' from your
// visualization of that data.
let animals = [
    {
        type: "cat",
        strength: 10,
        charisma: 16
    },
    {
        type: "dog",
        strength: 14,
        charisma: 9
    },
    {
        type: "rabbit",
        strength: 7,
        charisma: 12
    },
    {
        type: "sea horse",
        strength: 2,
        charisma: 20
    },
    {
        type: "turtle",
        strength: 10,
        charisma: 16
    }
];


// This function will clear the all-animal-info div, and then loop through
// all of the data, and add a HTML element to the DOM for each entry in the array.
function populateAnimalInfoDiv() {
    let animalInfoDiv = document.querySelector("#all-animal-info");

    animalInfoDiv.innerHTML = "";

    // for (let i = 0; i < animals.length; i++) {
    //  let animal = animals[i];
    // }
    // The for loop below does the same thing as the for loop above.
    for (let animal of animals) {
        let animalHTML = createAnimalDiv(animal);
        animalInfoDiv.innerHTML += animalHTML;
    }
}

// This function creates a DOM element for a provided animal object. Note, it
// makes use of the "template literal" feature of javascript, but you can also
// just assemble a string using normal string concatination.
function createAnimalDiv(animal) {
    return `
        <div>
            <h2>${animal.type}</h2>
            <div class='stats'>
                <div>strength: ${animal.strength}</div>
                <div>charisma: ${animal.charisma}</div>
            </div>
        </div>
    `;
}


// In the two lines below, we get a reference to the form (the html element
// full of input elements) and then we add an event listener that calls a
// function (addNewAnimal) whenever the submit button is pressed.
let addAnimalForm = document.querySelector("#add-animal-form");
addAnimalForm.addEventListener("submit", addNewAnimal);

// This function call draws the initial array of animals.
populateAnimalInfoDiv();


// This function is called whenever the form is submitted. When event handler 
// functions are called by the browser, they pass along a parameter that contains
// information about the situation that led to the event being called. In this 
// case, the parameter is called 'e'. 
function addNewAnimal(e) {
    // NOTE: when a form is submitted, the default behavior is to refresh the
    // page. So we need to have the line below, which tells the event NOT
    // to do that.
    e.preventDefault();

    // Get all of the information that the user inputted
    let typeInput = document.querySelector("#animal-type-field").value;
    let strengthInput = document.querySelector("#animal-strength-field").value;
    let charismaInput = document.querySelector("#animal-charisma-field").value;

    // Create a new animal object that matches the structure of the animals stored
    // in the array.
    let newAnimal = {
        type: typeInput,
        strength: strengthInput,
        charisma: charismaInput
    }
    // Add the animal to the array (the push function adds an element to an array at the end)
    animals.push(newAnimal);

    // Call the function that clears the animal info div, and creates and adds
    // HTML elements representing the info about the animals to the DOM.
    populateAnimalInfoDiv();
}