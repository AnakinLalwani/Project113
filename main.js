function preload() {
    img = loadImage("Border.png")
}
function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 200);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    
    fill(252, 221, 40);
    stroke(0, 0, 0);
    strokeWeight(5); 
    rect(40, 40, 560, 400);

    image(video, 50, 50, 540, 380);

    image(img, -10, -10, 660, 500);

    fill(230,184,87);
    stroke(0, 0, 0);
    strokeWeight(5); 
    circle(40, 40, 70);

    stroke(0, 0, 0);
    strokeWeight(5); 
    circle(40, 40, 50);

    stroke(0, 0, 0);
    strokeWeight(5); 
    circle(600, 40, 70);

    stroke(0, 0, 0);
    strokeWeight(5); 
    circle(600, 40, 50);

    stroke(0, 0, 0);
    strokeWeight(5); 
    circle(40, 440, 70);

    stroke(0, 0, 0);
    strokeWeight(5); 
    circle(40, 440, 50);

    stroke(0, 0, 0);
    strokeWeight(5); 
    circle(600, 440, 70);

    stroke(0, 0, 0);
    strokeWeight(5); 
    circle(600, 440, 50);
}

function take_snapshot() {
    save("framed_photo.png")
}

function filter_color() {
    filtercolor = document.getElementById("filtercolor").value;
}