function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0); 
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw(){
    var x = 0;
    var y = height / 2;

    while (x <=windowWidth) {
        fill('yellow'); 
        circle(x, y - 100, 10);
        x = x + 50;
    }

    for (var x = 0; x <= windowWidth; x = x + 50){
        fill(255); 
        circle(x, y + 100 , 10);
    }
}