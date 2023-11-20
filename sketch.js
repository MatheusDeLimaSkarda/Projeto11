var sea, ship;
function preload(){
  sea = loadImage ("sea.png");
ship= loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(800,400);
  
  mar = createSprite (400,130,800,400)
  mar.addImage (sea)
  mar.velocityX=-3
  barco=createSprite(400,200,100,50)
  barco.addAnimation ("correndo",ship)
  barco.scale=0.3;
  
}

function draw() {
  
  background("blue");
  if (mar.x < 0) {
    mar.x = mar.width / 2;
  }
    drawSprites();
 
 
}
