// variables
let movingObject;
let floor;
//setup
function setup(){
    new Canvas(600,400);
    movingObject = new Sprite()
    movingObject.x = 300;
    movingObject.y = 200;
    movingObject.width = 30;
    movingObject.height = 30;
    movingObject.collider = "dynamic";
    movingObject.mass = 1;
    movingObject.bouciness = -1000;
    floor = new Sprite(2400,20,1200,20)
    floor.x = 0;
    floor.y = 390;
    floor.width = 2400;
    floor.height = 20;
    floor.collider = "static";
    world.gravity.y = 10
}
function draw(){
    background(220);
    camera.x = movingObject.x;
    if (kb.presses(" ")){
        movingObject.vel.y = -5;
    }
}

