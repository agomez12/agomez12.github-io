var canvas;
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("sketch");
    canvas.position(0, 0);
    frameRate(60);
}

function draw() {
    background(0, 150, 255);
    fill(0, 0, 255);
    rect(0, 0, 100, 100);
    rect(0, windowHeight - 10, 100, 100);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}