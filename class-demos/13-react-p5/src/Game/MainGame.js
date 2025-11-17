class MainGame {
    constructor(p5) {
        this.p5 = p5;
    }

    setup() {
        console.log("SETUP!");
        this.p5.createCanvas(400, 400);
    }

    draw() {
        this.p5.background(255);
        this.p5.ellipse(this.p5.mouseX, this.p5.mouseY, 50);
    }
}
export default MainGame;