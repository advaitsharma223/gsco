
var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);

  speed = random (55, 90);
  weight = random (400, 1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed; 
  car.shapeColor = color("white");

  wall = createSprite(1400, 200, 60, 200);
  wall.shapeColor = color("grey");
}

function draw() {
  background(0);  
  
  car.collide(wall);

  if (wall.x - car.x <= (car.width /2+ wall.width/2)) {

    var deformation = 0.5 * weight * speed * speed / 22500

    console.log(weight);
    console.log(speed); 
    console.log(deformation);
    if(deformation > 180) {

      car.shapeColor = color("green");
    }   

    if(deformation > 180 && deformation > 100) {

      car.shapeColor = color("yellow");
    }

    if(deformation < 100) {

      car.shapeColor = color("red");
    }    
  }

  drawSprites();
}