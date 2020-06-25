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
let scrollDown = false
let PARALLAX_AMOUNT = 0.75
let unit = int(windowHeight/PARALLAX_AMOUNT)

let speeds = [1, 3];
let speed = speeds[0];

function draw() {
    background(0, 0, 0);
    scrollSpeedChange()

    handleScroll()
    if (this.scrollY < unit) {
        slingyBalls()
    } else if (this.scrollY >= unit && this.scrollY < 2*unit) {
        planets()
    }
}

function handleScroll() {
    if (this.scrollY < unit*0.8) {
        background(15, 7, 28);
    } else if (this.scrollY > unit*0.8 && this.scrollY < unit) {
        let r = map(this.scrollY, unit*0.8, unit, 15, 1)
        let g = map(this.scrollY, unit*0.8, unit, 7, 8)
        let b = map(this.scrollY, unit*0.8, unit, 28, 36)
        background(r, g, b)
        if (scrollDown) {
            window.scrollTo(0, unit)
        }
    } else if (this.scrollY >= unit) {
        background(1, 8, 36)
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

function scrolling(event) {
    if (event.deltaY < 0) {
        scrollDown = false
    } else {
        scrollDown = true
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    unit = int(windowHeight/PARALLAX_AMOUNT)
    if (windowWidth < 500) {
        res = 30
    } else {
        res = 50
    }
}

function keyPressed() {
    // s
    if (keyCode == 83) {
        window.scrollTo(0, 400)
    }
    // t
    if (keyCode == 84) {
        print("scrollY:", this.scrollY)
        print("scrollX:", this.scrollX)
    }
    // u
    if (keyCode == 85) {
        print(unit)
    }

}

