const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine;
var myWorld;



function preload(){
  
}
function setup() {
  createCanvas(1000, 600);
 myEngine = Engine.create();
 myWorld = myEngine.world;
  
 objects = [];


}

function draw() {

  background("black")

Engine.update(myEngine);

if(frameCount % 20 === 0){

var textPicked = generateChar(4);
object = new Drop(random(1,1000), -100);
objects.push([object,textPicked]);


}

for(var i = 0; i < objects.length ; i++){

objects[i][0].display(objects[i][1]);
console.log(objects);

}

}

function generateChar(length){

var result = " ";
var characters = "ABCDEFGHIJKLMNOPabghjklis1234567"
var charactersLength = characters.length;

for(var i = 0; i<length; i++){

  result+=characters.charAt(Math.floor(Math.random() * charactersLength))
}

return result;

}