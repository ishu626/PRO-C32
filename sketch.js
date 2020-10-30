const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score;

function preload() {
  getTime();
}
function setup() {
  score=0;
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

  base=new Ground(390,260,250,20);
  base2=new Ground(855,324,250,20);

block1=new Box(800,300,30,40);
block2=new Box(830,300,30,40);
block3=new Box(860,300,30,40);
block4=new Box(890,300,30,40);
block=new Box(920,300,30,40);

block5=new Box(830,260,30,40);
block6=new Box(860,260,30,40);
block7=new Box(890,260,30,40);

block8=new Box(860,220,30,40);
  block9=new Box(330,235,30,40);
  block10=new Box(360,235,30,40);
  block11=new Box(390,235,30,40);
  block12=new Box(420,235,30,40);
  block13=new Box(450,235,30,40);
 
  block14=new Box(420,195,30,40);
  block15=new Box(390,195,30,40);
  block16=new Box(360,195,30,40);

  block17=new Box(390,155,30,40);
 
  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot=new SlingShot(polygon,{x:100,y:200});


  
}

function draw() {
  background(255);  
  textSize(30);
    fill("yellow");
    text("Score:"+score,1000,50);
  Engine.update(engine);
  ellipse(polygon.position.x,polygon.position.y,20);
  block.display(); 
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
block15.display();
block16.display();
block17.display();
block.score();
block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
block13.score();
block14.score();
block15.score();
block16.score();
block17.score();

base.display();
base2.display();
slingshot.display();

drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed() {
  if (keyCode===32) {
      slingshot.attach(this.polygon);
  }
}
async function getTime(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var respond=await response.json(); 
  var dt=respond.datetime;
  var hour=dt.slice(11,13);
  if(hour>6&&hour<12){
   background(255,255,0); 
  }
  else{
    background(128,128,128);
  }

  console.log(hour);
  }