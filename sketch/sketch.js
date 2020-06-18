var canvas;
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("sketch");
    canvas.position(0, 0);
    frameRate(30);
}

var rectX = 0
var velX = 3
let rightX = true

let scrollChange = false
let scroll = this.scrollY;
function draw() {
    background(0, 150, 255);
    translate(0, -0.25*this.scrollY);
    fill(0, 0, 255);
    rect(rectX, windowHeight/2, 100, 100);
    if (rectX < 0) {
        rightX = true
    } else if (rectX > windowWidth - 100) {
        rightX = false
    }
    if (rightX) {
        rectX += velX;
    } else {
        rectX -= velX;
    }

    if (scrollChange) {
        velX = 10;
    } else { velX = 3}

    if (scroll != this.scrollY) {
        scrollChange = true
    } else {scrollChange = false}
    scroll = this.scrollY;
    console.log(scrollChange)
    
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}