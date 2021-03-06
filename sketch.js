function setup() {
  createCanvas(800,400);
}

function draw() {
  background(255,255,255);  

  hr=hour();
  sc=second();
  mn=minute();

  scAngle=map(sc,0,60,0,360); 
  mnAngle=map(mn,0,60,0,360);
  hrAngle=map(hr,0,60,0,360);

  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  push();
  rotate(mnAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  drawSprites();
}