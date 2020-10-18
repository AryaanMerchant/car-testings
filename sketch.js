
var  car,wall;
var  speed,weight;




function setup() {
  createCanvas(400,400);

  
  

  car1 = createSprite(100, 50, 50, 10);
  car2 = createSprite(100, 150, 50, 10);
  car3 = createSprite(100, 250, 50, 10);
  car4 = createSprite(100, 350, 50, 10);

  car1.shapeColor=("white");
  car2.shapeColor=("white");
  car3.shapeColor=("white");
  car4.shapeColor=("white");

  wall1 = createSprite(350, 50, 20, 50);
  wall2 = createSprite(350, 150, 20, 50);
  wall3 = createSprite(350, 250, 20, 50);
  wall4 = createSprite(350, 350, 20, 50);

  wall1.shapeColor=(80,80,80);
  wall2.shapeColor=(80,80,80);
  wall3.shapeColor=(80,80,80);
  wall4.shapeColor=(80,80,80);

  speed = random(55,90)
  weight = random(400,1500)


  boundary2 = createSprite(200, 200, 400, 10);
  boundary3= createSprite(200, 300, 400, 10);
  boundary4 = createSprite(200, 100, 400, 10);

boundary2.shapeColor=("white");
boundary3.shapeColor=("white");
boundary4.shapeColor=("white");


}

function draw() {
  background("black");  
  drawSprites();

 car1.velocityX = speed;
 car2.velocityX = speed;
 car3.velocityX = speed;
 car4.velocityX = speed;






if(wall1.x - car1.x < (car1.width+wall1.width)/2)
{                 
car1.velocityX=0;
var deformation=0.5*weight*speed*speed/22509;

if(deformation>180)
{
  car1.shapeColor=(255,0,0)
}

if(deformation<180 && deformation>100)
{
car1.shapeColor=(230,230,0)
}

if(deformation<100)
{
car1.shapeColor=(0,255,0)
}
}


console.log(deformation);
console.log(deformation1);
console.log(deformation2);
console.log(deformation3);


if(wall2.x - car2.x < (car2.width+wall2.width)/2)
{                 
car2.velocityX=0;
var deformation1=0.5*weight*speed*speed/22509;

if(deformation1>180)
{
  car2.shapeColor=(255,0,0)
}

if(deformation1<180 && deformation1>100)
{
car2.shapeColor=(230,230,0)
}

if(deformation1<100)
{
car2.shapeColor=(0,255,0)
}
}



if(wall3.x - car3.x < (car3.width+wall3.width)/2)
{                 
car3.velocityX=0;
var deformation2=0.5*weight*speed*speed/22509;

if(deformation2>180)
{
  car3.shapeColor=(255,0,0)
}

if(deformation2<180 && deformation2>100)
{
car3.shapeColor=(230,230,0)
}

if(deformation2<100)
{
car3.shapeColor=(0,255,0)
}
}




if(wall4.x - car4.x < (car4.width+wall4.width)/2)
{                 
car1.velocityX=0;
var deformation3=0.5*weight*speed*speed/22509;

if(deformation3>180)
{
  car4.shapeColor=(255,0,0)
}

if(deformation3<180 && deformation3>100)
{
car4.shapeColor=(230,230,0)
}

if(deformation3<100)
{
car4.shapeColor=(0,255,0)
}
}






















}