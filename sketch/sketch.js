new p5();
var canvas;
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("sketch");
    canvas.position(0, 0);
    frameRate(30);

    for (i = 0; i < 200; i++) {
        particles.push(new Particle(i, random(0, windowWidth), random(0, windowHeight)))
    } 
}

var rectX = 0
var velX = 3
let rightX = true

let scrollChange = false
let scroll = this.scrollY;
let speeds = [1, 3];
let speed = speeds[0];

let birthRate = 800
let lastBirth = 0

let particles = []

function draw() {
    background(0, 150, 255);
    translate(0, -0.25*this.scrollY);

    scrollSpeedChange()

    showGrid()
    
    for (i of particles) {
        i.display()
    }
}

let res = 100
let gridDistLim = 2
function evalGrid(x, y) {
    let xQuad, yQuad

    xQuad = ceil(x/res)
    yQuad = ceil(y/res)

    return createVector(xQuad, yQuad)
}

function showGrid() {
    push()
    stroke(0, 0, 0, 100)
    // render vert lines
    for (i=0; i < windowWidth; i += res) {
        line(i, 0, i, windowHeight)
    }
    // render hor lines
    for (i=0; i < windowHeight; i += res) {
        line(0, i, windowWidth, i)
    }
    pop()
}

function testRect() {
    fill(0, 0, 255);
    rect(rectX, windowHeight/2, 100, 100);
    if (rectX < 0) {
        rightX = true
    } else if (rectX > windowWidth - 100) {
        rightX = false
    }
    if (rightX) {
        rectX += velX*speed;
    } else {
        rectX -= velX*speed;
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
}

class Particle {
    constructor(index, x, y) {
        this.index = index
        this.pos = createVector(x, y)
        this.vel = createVector(random(-1, 1), random(-1, 1))
        this.size = random(10, 20)
        this.quadCoor = createVector(0, 0)
        this.lines = []
    }

    display() {
        push()
        translate(this.pos.x, this.pos.y)
        fill(245, 179, 66)
        ellipse(0, 0, this.size, this.size)
        pop()
        this.move()
        this.limits()

        this.quadCoor = evalGrid(this.pos.x, this.pos.y)
        //print(this.quadCoor.x, this.quadCoor.y)
        
        this.evalLines()
    }

    move() {
        this.pos.add(this.vel)

    }

    evalLines() {
        for (i=0; i < particles.length; i++) {
            let p = particles[i]
            if (i !== this.index) {
                if (p.quadCoor.equals(this.quadCoor.x, this.quadCoor.y)) {
                    line(p.pos.x, p.pos.y, this.pos.x, this.pos.y)
                }
            }
        }
    }

    limits() {
        if (this.pos.x > windowWidth) {
            this.pos.x = 0
        } else if (this.pos.x < 0) {
            this.pos.x = windowWidth
        }
        if (this.pos.y > windowHeight) {
            this.pos.y = 0
        } else if (this.pos.y < 0) {
            this.pos.y = windowHeight
        }
        this.vel.setMag(random(1, 4)*speed)
    }
}

class Line {

}