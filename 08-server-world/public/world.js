let world;

let people = {};

async function getWorld() {
    let response = await fetch("/world");
    world = await response.json();
}



async function setup() {
    console.log("p5 loaded!");

    createCanvas(800, 600);

    await getWorld();

    for (let region of world.regions) {
        for (let town of region.towns) {
            for (let person of town.notable_people) {
                people[person.name] = new Person(person);
            }
        }
    }

    colorMode(HSB);
}

function draw() {
    background(frameCount%360, 100, 100);

    let hoverPerson;

    for (let name in people) {
        let person = people[name];

        // Mouse over person
        if (dist(mouseX, mouseY, person.x, person.y) < person.radius) {
            person.hover = true;
            drawPersonInfo(person);
        } else {
            person.hover = false;
        }

        person.update();
    }
}

function drawPersonInfo(person) {
    let panelWidth = person.radius * 2.2;
    let panelHeight = 100;
    let panelHue = (person.hue + 180) % 2;
    fill(panelHue, 30, 100);
    rect(person.x - panelWidth/2, person.y - panelHeight * 1.2, panelWidth, panelHeight);
}