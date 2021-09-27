var plant1,plantimg,plant2
var ball,ballimg,plant2img
var backgroungimg
var zombie,zombieImg
var plant3,plant3img
var plant4 ,plant4img
var plant5,plant5img
var plant6,plant6img
var score = 0
function preload(){
    backgroungimg = loadImage("BGIMG.jpg")
    zombieImg = loadAnimation("Zombie1.png","zombie2.png","zombie3.png")
    plantimg = loadImage("Plant 1.png")
    plant2img = loadImage("plant2.png")
    plant3img = loadImage("plant3.png")
    ballimg = loadImage("ball 1.png")
    plant4img = loadImage("plant 5.png")
    plant5img = loadImage("plant 6.png")
    plant6img = loadImage("plant 7.png")
    }
function setup(){
    var canvas = createCanvas(1200,600);

    plant1 = createSprite(300,300,40,40)
    plant1.addImage("plant1",plantimg)
    plant1.scale = 0.1
  
    plant2 = createSprite(250,60,30,30)
    plant2.addImage("plant2",plant2img)
    plant2.scale = 0.1

    plant3 = createSprite(280,520,30,30)
    plant3.addImage("plant3",plant3img)
    plant3.scale = 0.15

    plant4 = createSprite(400,520,30,30)
    plant4.addImage("plant4",plant4img)
    plant4.scale = 0.5

    plant5 = createSprite(380,60,30,30)
    plant5.addImage("plant5",plant5img)
    plant5.scale = 0.4

    plant6 = createSprite(480,60,30,30)
    plant6.addImage("plant6",plant6img)
    plant6.scale = 0.4
}
    function draw(){

        background(backgroungimg)

    if(keyWentDown("space") ){
        spawnball()
    }
    if(frameCount % 60 === 0 ){
        spawnzombie()
        }
        
    drawSprites()
    }
    function spawnball(){
    
        ball = createSprite(plant1.x+30,plant1.y-20,25,25)
        ball.addImage("ball",ballimg)
        ball.scale = 0.15
        ball.velocityX = 7
    
}
function spawnzombie(){
  zombie  = createSprite(1200,Math.round(random(100,500)),30,70)
  zombie.addAnimation("zombie",zombieImg)
  zombie.scale = 0.2
  zombie.velocityX = -4
  //zombieGroup.add(zombie)
  //zombie.debug = true
  zombie.setCollider("rectangle",0,0,500,700)
}