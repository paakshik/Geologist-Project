let z = 200;
let w= 200;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);
sand = [];

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
gruond = new Ground();
iron = new Iron(300,200);
hammer = new Hammer(200,200);
rubber = new Rubber(800,275);
stone = new Stone(700,200);
let i =0;
while (i < 200){
  sand[i] = new Sand((100 + i) + 30,100 );
i++;
}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  
  background(0);
  gruond.show();
 stone.show();
  iron.show();
  rubber.show();

  sand.forEach(san => {
san.show();


  })
  hammer.show();
  drawSprites();
 
}



