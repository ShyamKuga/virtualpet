//Create variables here
var dog,happyDog,database, foodS, foodStock
var Image1, Image2

function preload()
{
  Image1 = loadImage("images/dogImg.png")
  Image2 = loadImage("images/dogImg1.png")
}

function setup() {
createCanvas(500, 500);
dog.addImage("images/dogImg.png")
happyDog.addImage("images/dogImg1.png")
database = firebase.database()
foodSTock=database.ref('Food')
foodStock.on("value",readStock)


}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDog)
}
  drawSprites();

  //add styles here

}
function readStock(data){
  foodS=data.val
}

function writeStock(x){
  database.ref('/').update({
    Food:x})
}


