function preload() {

}
function setup() {
    canvas = createCanvas(1000 , 600);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = " ";

}
function draw() {
    image(video , 0 , 0 , 1000 , 600);
    stroke(241,159,55);
    strokeWeight(50);
    noFill();
    rect(0,0,1000,600);
    strokeWeight(30);
    stroke(113,216,163);
    fill(241,159,55);
    circle(30,30,70);
    strokeWeight(30);
    stroke(113,216,163);
    fill(241,159,55);
    circle(970,30,70);

    strokeWeight(30);
    stroke(113,216,163);
    fill(241,159,55);
    circle(30,570,70);
    strokeWeight(30);
    stroke(113,216,163);
    fill(241,159,55);
    circle(970,570,70);
}
function take_snapshot() {
    save('filter_image.png');
}
