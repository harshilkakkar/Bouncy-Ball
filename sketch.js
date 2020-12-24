
var engine, world;




//physics engine here and a variable version of a called functions

const Engine = Matter.Engine;
const World =  Matter.World;
const Bodies = Matter.Bodies;



function setup() {
  createCanvas(400,400);

engine = Engine.create();
world = engine.world;

var ground_options ={
  isStatic : true
}

ground = Bodies.rectangle(200,320,50,50,ground_options);
 World.add(world, ground);
console.log(ground);
var ball_options ={
  restitution : 2.0

}
ball = Bodies.circle(200,200,20,ball_options);
World.add(world,ball);



}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  ellipseMode(RADIUS);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,200,20);
  ellipse(ball.position.x, ball.position.y,20,20);
  drawSprites();
}