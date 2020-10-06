
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof, rope1, bob1, rope2, bob2, rope3, body3, rope4, body4, rope5, body5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(400, 250, 50);

	bob2 = new Bob(500, 250, 50);

	bob3 = new Bob(600, 250, 50);

	bob4 = new Bob(300, 250, 50);

	bob5 = new Bob(200, 250, 50);

	roof = new Roof(400, 50, 500, 20);

	rope1 = new Rope(bob1.body, {x: 400, y: 50});

	rope2 = new Rope(bob2.body, {x: 500, y: 50});

	rope3 = new Rope(bob3.body, {x: 600, y: 50});

	rope4 = new Rope(bob4.body, {x: 300, y: 50});

	rope5 = new Rope(bob5.body, {x: 200, y: 50});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('lightBlue');
  
  bob1.display();

  bob2.display();

  bob3.display();

  bob4.display();

  bob5.display();

  rope1.display();

  rope2.display();

  rope3.display();

  rope4.display();

  rope5.display();

  roof.display();
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(bob5.body, bob5.body.position, {x: -100, y: -100});
	}
}


