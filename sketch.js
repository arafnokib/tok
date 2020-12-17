var hr;
var sc;
var mn;
var scAngle;
var mnAngle;
var hrAngle;




function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  mn = minute();
  hr = hour();
  sc = second();
  angleMode(DEGREES)
}

function draw() {
  background(85);  
  scAngle = map(sc,0,60,0,360)
  mnAngle = map(mn,0,60,0,360)
  hrAngle = map(hr,0,60,0,360)

  push()
  stroke (255,0,0)
  strokeWeight(7)
  rotate(second())
  line(600,200,100,0)
  pop()

  push()
  stroke (0,255,0)
  strokeWeight(7)
  rotate(minute())
  line(600,200,100,0)
  pop()
  
  push()
  stroke (0,0,255)
  strokeWeight(7)
  rotate(hour())
  line(600,200,100,0)
  pop()
/*
  stroke (0,255,0)
  strokeWeight(7)
  rotate(minute())
  line(200,200,100,0)

  stroke (0,0,255)
  strokeWeight(7)
  rotate(hour())
  line(200,200,100,0)
  /*rotate(mnAngle)
  line(0,0,100,0)
  rotate(hrAngle)
  line(0,0,100,0)
  */

  //drawSprites();
}