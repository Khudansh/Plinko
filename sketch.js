const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body 

var ground;
var particles = []
var plinkos = []
var divisions = []
var divisionHeight=300;
function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground=new Ground(240,780,800,10);


}

function draw() {
  Engine.update(engine);
  background("black");  

  for(var k=0; k<=width; k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j=15; j<=width; j=j+50){
    plinkos.push(new Plinkos(j,75));
  }

  for(var j=40; j<=width; j=j+50){
    plinkos.push(new Plinkos(j,175));
  }

  for(var j=15; j<=width; j=j+50){
    plinkos.push(new Plinkos(j,275));
  }

  for(var j=40; j<=width; j=j+50){
    plinkos.push(new Plinkos(j,375));
  }

  for(var j=0; j<divisions.length; j++){
    divisions[j].display();
  }

  for(var j=0; j<plinkos.length; j++){
    plinkos[j].display();
  }

  for(var j=0; j<particles.length; j++){
    particles[j].display();
  }
  
  if(frameCount%60===0){
    particles.push(new Particle(width/2-10,10,10,10))
  }

  ground.display();
}