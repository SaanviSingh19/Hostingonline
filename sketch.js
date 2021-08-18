var sea,ship;
var seaimg,shipimg;

function preload(){
seaimg=loadImage ("sea.png");
shipimg=loadAnimation ("ship1.png", "ship2.png", "ship1.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
 sea=createSprite (400,200);
sea.addImage(seaimg);
sea.scale=0.3;
  sea.velocityX=-5;
  
  ship=createSprite(130,200,20,20);
  ship.addAnimation("movingShip",shipimg);
  ship.scale=0.25;
}

function draw() {
  background(0);
  
  if(sea.x<0){
  sea.x= 100;
  }
  drawSprites();
}