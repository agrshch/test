let BACK_h = window.innerHeight * 1.4;
let BACK_w = BACK_h * 1.78;
let backTranslateRange = window.innerHeight*0.15;

let LAYERS = 3;
let SB;
let SB_pic = new Array(1);

let trXprev = 0;
let trYprev = 0;

function preload(){
  SB_pic = loadImage('images/sb1.svg');
}

function setup() {
  imageMode(CENTER);
  rectMode(CENTER);
  createCanvas(windowWidth, windowHeight);


  let inversion = (random() < 0.5);
  let x = random(width);
  let y = random(height);
  let r = width*0.2;
  let speed = 2;
  let pic = SB_pic;
  SB = new Snowball(x,y,r,speed,inversion,pic);

}

function draw() {
  background(120);

  let lerpVal = 0.05;
  let trXdesired = map(mouseX,0,width, -backTranslateRange,backTranslateRange) * 0.3;
  let trX = lerp(trXprev,trXdesired,lerpVal);

  let trYdesired = map(mouseY,0,width, -backTranslateRange,backTranslateRange) * 0.2;
  let trY = lerp(trYprev,trYdesired,lerpVal);

  for(let s = 0; s < LAYERS; s++){
    push();
    translate(trX * (s+0.5), trY * (s+0.3));
    fill(0,255,0);
    rect(width/2, height/2,200,200);
    pop();
  }
  SB.update();
  SB.display();


  trXprev = trX;
  trYprev = trY;

  textSize(50);
  text(frameRate(),100,100);

}
