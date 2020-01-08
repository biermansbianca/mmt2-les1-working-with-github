var rood = 255;
var blauw = 225;
var geel = 255;
var vincent = "hallo";

function setup() {
  // put setup code here


  
  createCanvas(400,400);
  background(240);


  
  


}

function draw() {
  // put drawing code here
  background(0,400-mouseX,0);
  console.log(mouseX);


  rood = random(0,255);
  blauw = random(255);
  geel = random(255);
  // background(rood,0,blauw,random(255));
  // console.log(vincent);

  fill("pink");
  ellipse(200,200,mouseX,400);
  
  fill("blue");
  ellipse(200,200,200,200)

  fill("yellow");
  rect(150,150,100,100);

  fill("red");
  line(800,200,0,200); 
  // dit is horizontal

  fill("grey");
  line(200,800,200,0)
  // dit is verticaal

  stroke(255);
  strokeWeight(5);

  

  



}