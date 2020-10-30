var bullet,wall,speed,weight,deformation, thickness
function setup() {

  createCanvas(1600,400);
  speed = random(223,321) 
  weight = random(30,52)
  bullet = createSprite(50,200,50,50)
  bullet.shapeColor="blue"
  bullet.velocityX=speed
  thickness = random(22,83)
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor="white"
}
function draw() {
  background("black");
  if(hasCollided(bullet,wall)){
   bullet.velocityX = 0
    Deformation = 0.5*weight*speed*speed/(thickness*thickness*thickness)
  
   if(deformation > 10){
     wall.shapeColor = "red"

   }
  
   if(deformation < 10){
     wall.shapeColor = "green"
   }

  }
  
  drawSprites();
}
function hasCollided(bullet,wall) {
bullet1=bullet.x+bullet.width
wall1 = wall.x
}