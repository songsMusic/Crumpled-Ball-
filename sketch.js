
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
	

	b1 =new Dustbin(790,200,60,10) ; 
	b2 = new Dustbin (700,600,10,40) ; 
	b3 = new Dustbin (600, 200, 10, 40) ; 
	ball = new Paper (200,200) ; 
	ground = new ground(800,700,5,5)

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  keyPressed(); 
  drawSprites();
 
}

function keyPressed () {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body , ball.body.position, {x:85, y:-85})
	}
}

