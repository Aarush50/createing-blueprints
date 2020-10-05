const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,object1;
var ball;
var box1;
var box2;
var ground;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  box1=new Box(200,300,50,50);
  box2=new Box(245,100,50,50);
  ground=new Ground(200,390,400,20);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  console.log(box2.body.angle);
  box1.display();
  box2.display();
  ground.display();
    drawSprites();
}