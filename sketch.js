
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var left;
var right;
var top_wall;
var button1;
var button2;
var engine ,world;


function setup() {
	createCanvas(900, 800);
	engine = Engine.create();
	world = engine.world;
	var ball_options={
		isStatic : false,
		restitution: 0.3,
		friction:0,
		density:1.2,
	}


	ball = Bodies.circle(200 ,100 ,20 ,ball_options);
	World.add(world , ball);

	groundObj = new Ground(width/2 , 670 ,width ,20);
	leftSide = new Ground(100 , 600 ,20 ,120);
	rightSide = new Ground(400, 600 ,20 ,120);

	rectMode(CENTER);
	ellipseMode(RADIUS);


	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  drawSprites();
  groundObj.show();
 leftSide.show();
 rightSide.show();
  
  ellipse(ball.position.x , ball.position.y , 20);
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball ,ball.position, {x:200 , y:-200} )
	}
}



