const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world, bodies;

var umbrellaMan;
var drops = [];
var maxDrops = 100;

function preload(){
    
}

function setup(){
   createCanvas(400,600);

   engine = Engine.create();
   world = engine.world;

   umbrellaMan = new Umbrella(200, 550);

   for(var i = 0; i<maxDrops; i++){
       drops.push(new Drops(random(0,400),random(0,400)));
   }
    
}

function draw(){
    background("black");
    Engine.update(engine);

    umbrellaMan.display();
    drops.display();
    
}   

