var dog, dogImg,dogHappy,foods,Foodstock;

function preload()
{
  dogImg=loadImage("images/dogImg.png");
  dogHappy=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  Foodstock=database.ref('food');
  Foodstock.on("value",readStock);
  dog=createSprite(340,420,70,70)
  dog.addImage(dogImg);
  dog.scale=0.2;
  
}


function draw() { 
  background(46,138,87); 
  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
  dog.addImage(dogHappy);
  }
  drawSprites();


}

function readStock(data){
foods=data.val();
}

  
  function writeStock(x){
    if(x<=0){
      x=0
    }
    else{
      x=x-1;
    }
  database.ref('/').update({
    food:x
  })
}

