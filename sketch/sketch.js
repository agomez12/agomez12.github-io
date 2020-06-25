new p5();
var canvas;
let idNum = 0
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("sketch");
    canvas.position(0, 0);
    frameRate(30);

    for (i = 0; i < 30; i++) {
        particles.push(new SlingyBall(i, idNum, random(0, windowWidth), random(0, windowHeight)))
        idNum++
    }

    smooth()
}

let scrollChange = false
let scroll = this.scrollY;
let PARALLAX_AMOUNT = 0.75

let speeds = [1, 3];
let speed = speeds[0];

function draw() {
    background(15, 7, 28);
    scrollSpeedChange()
    handleScroll()
    slingyBalls()
}

function handleScroll() {
    let unit = windowHeight/PARALLAX_AMOUNT
    if (this.scrollY > unit*0.6 && this.scrollY < unit) {
        window.scrollTo({
            top: unit,
            left: 0,
            behavior: 'smooth'
        })
    }
}

function scrollSpeedChange() {
    if (scrollChange) {
        speed = speeds[1];
    } else { speed = speeds[0]}

    if (scroll != this.scrollY) {
        scrollChange = true
    } else {scrollChange = false}
    scroll = this.scrollY;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    if (windowWidth < 500) {
        res = 30
    } else {
        res = 50
    }
}

function keyPressed() {
    // t
    if (keyCode == 84) {
        print("scrollY:", this.scrollY)
        print("scrollX:", this.scrollX)
    }
    // s
    if (keyCode == 83) {
        window.scrollTo({
            top: 400,
            left: 0,
            behavior: 'smooth'
        })
    }

}

