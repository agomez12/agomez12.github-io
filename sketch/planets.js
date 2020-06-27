let s
let planetsSet = []

function planetsSetup() {
    s = new Sun()

    for (i = 0; i < 10; i++) {
        planetsSet.push(new Planet(random(0, windowWidth), random(0, windowHeight)))
    }
}

function planets() {
    push()
    translate(0, windowHeight)
    s.display()

    for (p of planetsSet) {
        p.display()
    }
    pop()
}

class Sun {
    constructor() {
        this.pos = createVector(windowWidth/2, windowHeight/2)
        this.rad = 60
    }

    display() {
        push()
        translate(this.pos.x, this.pos.y)
        fill("#E9980C")
        noStroke()
        ellipseMode(CENTER)
        circle(0, 0, this.rad *2)
        pop()
    }
}

class Planet {
    constructor(x, y) {
        this.pos = createVector(x, y)
        this.rad = random(5, 20)
        this.vel = createVector(random(-1, 1), random(-1, 1))
    }

    display() {
        push()
        translate(this.pos.x, this.pos.y)
        fill(161, 193, 129)
        noStroke()
        circle(0, 0, this.rad *2)
        this.limits()
        this.move()
        pop()
    }

    move() {
        this.pos.add(p5.Vector.mult(this.vel, speed))
    }

    limits() {
        if (this.pos.y < this.rad) {
            this.vel.y = -this.vel.y
        } else if (this.pos.y > windowHeight - this.rad) {
            this.vel.y = -this.vel.y
        }
        if (this.pos.x < -this.rad) {
            this.pos.x = windowWidth + this.rad
        } else if (this.pos.x > windowWidth + this.rad) {
            this.pos.x = -this.rad
        }

        if (this.vel.mag() < 1) {
            this.vel.setMag(1)
        }

        this.vel.limit(8*speed)
    }
}

function planetsResize() {
    s.pos.x = windowWidth/2
    s.pos.y = windowHeight/2
}