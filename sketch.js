var cat,catImg,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;
var bg,bgImg;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1= loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg = createSprite(500,400);
    bg.addImage(bgImg);
   //bg.scale = 1.5;

   cat = createSprite(750,400);
 cat.addAnimation("sleepingcat",catImg1);
  cat.scale = 0.2;



  mouse= createSprite(250,400);
  mouse.addAnimation("mousestanding",mouseImg1);
  //console.log(mouse.width);
  mouse.scale = 0.15;

  
}

function draw() {

    background(255);

    //Write condition here to evalute if tom and jerry collide

      console.log(cat.x-mouse.x);
      console.log(mouse.width/2+cat.width/2);

    if(cat.x - mouse.x < mouse.width/2 -cat.width/2)
    {
      cat.velocityX = 0;
      
       
      cat.addAnimation("cat3",catImg3);
      
      //cat.x=300;
      cat.scale=0.2;
      cat.changeAnimation("cat3");


     
      mouse.addAnimation("mouse3",mouseImg3);
      
      mouse.scale = 0.15;
     mouse.changeAnimation("mouse3");


  }

  drawSprites();
}
  

function keyPressed(){

  //For moving and changing animation write code here

if (keyDown(LEFT_ARROW)){
    
   cat.velocityX = -5;
  
   

    cat.addAnimation("cat",catImg2);
     cat.changeAnimation("cat");

   mouse.addAnimation("mouserunnnig",mouseImg2);
    //mouse.frameDelay = 25;
    mouse.changeAnimation("mouserunnnig");
    
 
    
}

}
