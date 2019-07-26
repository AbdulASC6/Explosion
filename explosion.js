let circles = []
function setup(){
    createCanvas(1300,600)
    for(i = 0; i <50;i++){
        let circle = {
        x : 5+ (i*25),
        y : 300,
        r : random(25,100) 
        }
    circles.push(circle)
    }
}

function draw(){
    background(200);

    for(i = 0; i < circles.length; i++){
        let curr = circles[i];
        noStroke();
        fill(randomColor());
        ellipse(curr.x,curr.y,curr.r);
        curr.x += random(-3,3);
        curr.y += random(-3,3);
        curr.r += random(-3,3);
    }

}

function randomColor(){
    a = random(0,255)
    b = random(0,255)
    c = random(0,255)
    let randColor = color(a,b,c)
    return randColor
}

