const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bob1,bob2,bob3,bob4,bob5;
var chain1,chain2,chain3,chain4,chain5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(1350,700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(675,500,40);
	bob2 = new Bob(595,500,40);
	bob3 = new Bob(515,500,40);
	bob4 = new Bob(755,500,40);
	bob5 = new Bob(835,500,40);

	roof = new Roof(675,50,600,40);

	chain1 = new Chain(bob1.body,roof.body,0);
	chain2 = new Chain(bob2.body,roof.body,-80);
	chain3 = new Chain(bob3.body,roof.body,-160);
	chain4 = new Chain(bob4.body,roof.body,80);
	chain5 = new Chain(bob5.body,roof.body,160);


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  
  background("pink");

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob3.body,bob5.body.position,{x:-100,y:-100})
	}
}
