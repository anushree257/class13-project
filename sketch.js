var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var orngle,orngleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage ("apple.png");
  orngleImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// background
garden=createSprite(200,200);
garden.addImage(gardenImg);

// creating rabbit
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

var select_sprites = Math.round(random(1,2));

if(frameCount % 80 == 0){
if(select_sprites == 1){
  createApples();
}
else{
  createLeaves();
}
}

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  //to move the rabbit along with the mouse
  rabbit.x = World.mouseX;

  createApples();
  createLeaves();

  drawSprites();
}

//creating the function createApples
function createApples(){
if(frameCount % 80 == 0){
apple = createSprite(random(50,350),40,10,10);
apple.addImage(appleImg);
apple.scale = 0.05;
apple.velocityY = 4;
apple.lifeTime = 100;
}
}

//creating the function createLeaves
function createLeaves(){
  if(frameCount % 80 == 0){
  orngle = createSprite(random(50,300),40,10,10);
  orngle.addImage(orngleImg);
  orngle.scale = 0.05;
  orngle.velocityY = 4;
  orngle.lifeTime = 100;
  }
}