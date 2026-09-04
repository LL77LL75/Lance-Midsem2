// variables
let fallingObject;
let floor;
//setup
function setup(){
    new Canvas(600,400);
    fallingObject = new Sprite()
    fallingObject.x = 300;
    fallingObject.y = 200;
    fallingObject.width = 30;
    fallingObject.height = 30;
    fallingObject.collider = "dynamic";
    floor = new Sprite(2400,20,1200,20)
    floor.x = 0;
    floor.y = 10;
    floor.width = 2400;
    floor.height = 20;
    floor.collider = "static";
    world.gravity.y = -10
}
function Draw(){
    background(-1)
}

