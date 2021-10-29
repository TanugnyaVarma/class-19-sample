var rocket, rocketImg
var space, spaceImg;
var ufo, ufoImg, ufoGroup;
var ufo2, ufo2Img, ufo2Group;
var asteroid, asteroidImg;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var score 

var gameOver, gameOverImg
var restart, restartImg



function preload(){

    rocketImg = loadImage("rocket.png");
    spaceImg = loadImage("space.jpg");
    gameOverImg = loadImage("gameOver.png");
    restartImg = loadImage("Restart.png");


   

}

function setup() {
 createCanvas(450,900);
 
var rocket = createSprite(220,600,50,30);
rocket.addImage("player",rocketImg);
rocket.scale = 0.2;


var space = createSprite(220,420,500,900);
space.addImage("moving", spaceImg);
space.velocityY = 5;
space.depth = rocket.depth;
rocket.depth = rocket.depth + 1;




gameOver = createSprite(300,100);
gameOver.addImage(gameOverImg);

restart = createSprite(300,140);
restart.addImage(restartImg);

gameOver.scale = 0.5;
restart.scale = 0.5;

gameOver.visible = false;
restart.visible = false;

ufoGroup = new Group();
ufo2Group = new Group();

score = 0;



}

function draw() {

    background(0);
    textSize(30);
    


   if(gameState === PLAY){

    

    score = score + Math.round(getFrameRate()/60);

    if(space.y > 400 ){
        space.y = space.height/2;
      }


   }







drawSprites();

text("Score: "+ score,40,50);

}