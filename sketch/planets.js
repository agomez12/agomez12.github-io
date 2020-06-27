let planetsSet = []
let planetsLines = []

function planetsSetup() {

    for (i = 0; i < 2; i++) {
        planetsSet.push(new Planet(random(0, windowWidth), random(0, windowHeight)))
    }
}

function planets() {
    push()
    translate(0, windowHeight)
    
    showLine(planetsSet[0].pos, planetsSet[1].pos)

    for (let p of planetsSet) {
        p.display()
    }
    pop()
}

class Planet {
    constructor(x, y) {
        this.pos = createVector(x, y)
        this.rad = random(5, 20)
        this.vel = createVector(random(-1, 1), random(-1, 1))
        this.mass = PI * sq(this.rad)
    }

    display() {
        push()
        translate(this.pos.x, this.pos.y)
        fill("#E9980C")
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
            this.pos.y = this.rad
        } else if (this.pos.y > windowHeight - this.rad) {
            this.vel.y = -this.vel.y
            this.pos.y = windowHeight - this.rad
        }
        if (this.pos.x < this.rad) {
            this.vel.x = -this.vel.x
            this.pos.x = this.rad
        } else if (this.pos.x > windowWidth - this.rad) {
            this.vel.x = -this.vel.x
            this.pos.x = windowWidth - this.rad
        }

        if (this.vel.mag() < 4) {
            this.vel.setMag(4)
        }

        this.vel.limit(8*speed)
    }

    orbit() {
        for (let p of planetsSet) {

        }
    }
}

let maxLines = 500

function showLine(p1, p2) {
    push()
    strokeWeight(1)
    stroke(161, 193, 129)
    line(p1.x, p1.y, p2.x, p2.y)
    for (let l of planetsLines) {
        line(l[0], l[1], l[2], l[3])   
    }
    pop()

    if (int(millis())%5 == 0) {
        planetsLines.push([p1.x, p1.y, p2.x, p2.y])
    }

    if (planetsLines.length > maxLines) {
        // planetsLines.splice(0, planetsLines.length - maxLines)
    }

}

function planetsResize() {
    s.pos.x = windowWidth/2
    s.pos.y = windowHeight/2
}