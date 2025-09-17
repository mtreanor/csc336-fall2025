let person = {
    name: "Mike",
    favoritePetIsCat: true,
    hello: function(n) {
        for (let i = 0; i < n; i++) {
            console.log("hello");
        }
    },
    favoritePet: {
        name: "buddy",
        spieces: "cat"
    }
}

person.hello(100);
console.log(person.favoritePet.name);
person.favoritePet.name = "Mew Mew";
console.log(person.favoritePet.name);

console.log(document);


function rollDice() {
    let randomNumber = Math.ceil(Math.random() * 6);
    let diceRollDiv = document.querySelector("#dice-roll");

    // diceRollDiv.innerHTML += "<div class='dice-roll'>" + randomNumber + "</div>";

    let newRollDiv = document.createElement("div");
    newRollDiv.innerText = randomNumber;
    newRollDiv.className = "dice-roll";
    diceRollDiv.append(newRollDiv);
}


















