class Person {
    constructor(data) {
        this.data = data;
        this.x = random(0, width);
        this.y = random(0, height);
        this.hue = random(0, 360);
        this.radius = 25;
        this.hover = false;
    }

    update() {
        if (this.hover) {
            fill(0, 100, 100);
        } else {
            fill(this.hue, 60, 100); // hue (range 0-360), saturation (range 0-100), brightness (0-100)
        }
        ellipse(this.x, this.y, this.radius*2);
        textAlign(CENTER);
        fill(0, 0, 0);
        text(this.data.name, this.x, this.y);
    }
}