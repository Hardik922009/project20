var bg,cat,mouse,mouseteasing,mousegift,catwalking,catrest;
var tom,jerry;

function preload() {
    bg=loadImage("images/garden.png");
    cat=loadAnimation("images/cat1.png");
    mouse=loadAnimation("images/mouse4.png");
    mouseteasing=loadAnimation("images/mouse2.png","images/mouse3.png");
    mousegift=loadAnimation("images/mouse1.png");
    catwalking=loadAnimation("images/cat2.png","images/cat3.png");
    catrest=loadAnimation("images/cat4.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    
    jerry=createSprite(200,530,20,20);
    jerry.addAnimation("jer",mouse)
    jerry.scale=0.15

    tom=createSprite(800,550,20,20);
    tom.addAnimation("any",cat)
    tom.scale=0.2

}


function draw() {

    background(bg);
    
    if( tom.x-jerry.x < (tom.width-jerry.width)/2 ){
        tom.velocityX=0;
        tom.addAnimation("tomStop",catrest);
        tom.changeAnimation("tomStop");
        tom.x=tom.x+100
        jerry.addAnimation("jerrygift",mousegift);
        jerry.changeAnimation("jerrygift");

    }


    drawSprites();
}


function keyPressed(){

    if(keyCode=== LEFT_ARROW){
     tom.addAnimation("tomWalking",catwalking);
     tom.changeAnimation("tomWalking");
     tom.velocityX=-4;
     jerry.addAnimation("jerryJumping",mouseteasing);
     jerry.changeAnimation("jerryJumping")
     jerry.scale=0.15;

    }
  

}