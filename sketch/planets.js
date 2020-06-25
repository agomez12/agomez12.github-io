let s

function planetsSetup() {
    s = new Sun()
}

function planets() {
    push()
    translate(0, windowHeight)
    s.display()
    pop()
}

class Sun {
    constructor() {
        this.pos = createVector(windowWidth/2, windowHeight/2)
        this.size = 30
    }

    display() {
        push()
        translate(this.pos.x, this.pos.y)
        fill("#E9980C")
        noStroke()
        ellipseMode(CENTER)
        circle(0, 0, this.size)
        pop()
    }
}

function planetsResize() {
    s.pos.x = windowWidth/2
    s.pos.y = windowHeight/2
}