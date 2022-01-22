var capture;

function setup(){
    createCanvas(400,400).position(500,200);
    capture = createCapture(VIDEO);
    capture.size(400,400);
    capture.position(1000,200)
}
function draw(){
    background(245);
}