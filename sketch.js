var bg1 
var brick1, brick2, brick3, brick4
var player;
var bg;
var playerImage;
var bricksGroup
var standGroup
var gameState="play"
var bricky= 550
function preload(){
brick1 = loadImage("images/brick1.jpg") 
brick2 = loadImage("images/brick2.jpg")  
brick3 = loadImage("images/brick3.jpg") 
brick4 = loadImage("images/brick4.jpg") 
playerImage = loadImage("images/midas.png")
bg = loadImage("images/bg1.jpg")
}
function setup(){
    createCanvas(1000,600);
    
    bricksGroup = new Group()
    standGroup = new Group()
   bg1 = createSprite(width/2, height/2)
   bg1.addImage(bg)
   bg1.velocityY=1
   player = createSprite(width/2,height-50,10,10);
    //player.shapeColor = "red";
    player.addImage("playerImage", playerImage)
    player.scale=0.1

}

function draw(){
    background("white");
    if(gameState=="play"){
    if(bg1.y>300){
        bg1.y=250
    }
    
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    if(keyDown("space")){
        player.velocityY = -3
    }
    player.velocityY = player.velocityY + 0.1
    drawSprites();
    spawnBricks()
    if(bricksGroup.isTouching(player)){
        player.velocityY=0
    }
   if(standGroup.isTouching(player)){
       gameState="end"
   }
}
}

function changePosition(x,y){
    player.x = player.x + x;
    player.y = player.y + y;
}
function spawnBricks(){
    if(frameCount%100==0){
        var brick = createSprite(100,-50,180,30)
       // brick.velocityY = 3
        brick.x = random(250,550)
        brick.y=bricky
        bricky=bricky-50
        bricksGroup.add(brick)
    var count1 = Math.round(random(1,4))
    if(count1==1){
        brick.addImage(brick1)
        
    }
    else if(count1==2){
        brick.addImage(brick2)

    }
    else if(count1==3){
        brick.addImage(brick3)
    }
    else if(count1==4){
        brick.addImage(brick4)
    
    }
    var stand = createSprite(brick.x,brick.y+15,brick.width,3)
    stand.velocityY=3
    standGroup.add(stand)
    }
}