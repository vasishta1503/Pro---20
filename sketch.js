
var cat,cat1Img,cat2Img,cat4Img;
var mouse,mouse1Img,mouse2Img,mouse4Img;
var bgImg;

function preload() {
    bgImg = loadImage ("images/garden.png")
    cat1Img = loadAnimation("images/cat1.png",)
    cat2Img = loadAnimation("images/cat2.png","images/cat3.png")
    cat4Img = loadAnimation("images/cat4.png")
    mouse1Img = loadAnimation("images/mouse1.png")
    mouse2Img = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse4Img = loadAnimation("images/mouse4.png")
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(840,720,50,100)
    cat.addAnimation("cat",cat1Img);
    cat.addAnimation("cat2",cat2Img)
    cat.scale = 0.18 ;
    
    mouse = createSprite(100,700,50,100)
    mouse.addAnimation("mouse",mouse1Img);
    mouse.addAnimation("mouse2",mouse2Img);
    mouse.scale = 0.16

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.addAnimation("cat",cat4Img);
        cat.changeAnimation("cat");
        
        mouse.addAnimation("mouse",mouse4Img);
        mouse.changeAnimation("mouse");
        cat.velocityX = 0
        cat.x = 200;
        cat.y = 700
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 
  if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouse2Img );
    mouse.changeAnimation("mouseTeasing")
    mouse.framDelay = 25;

    cat.addAnimation("catRunning",cat2Img);
    cat.changeAnimation("catRunning");
    cat.velocityX = -10;


} 

  
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouse2Img );
      mouse.changeAnimation("mouseTeasing")
      mouse.framDelay = 25;

      cat.addAnimation("catRunning",cat2Img);
      cat.changeAnimation("catRunning");
      //cat.frameDelay = 25; 
      cat.velocityX = -10; 

  } 
}
