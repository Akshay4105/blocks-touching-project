var fixedRect, movingRect;
var rect1, rect2, rect3, rect4;

function setup() {
  createCanvas(600, 600);
  fixedRect = createSprite(300, 300, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(0, 300, 40, 30);
  movingRect.velocityX = 5;
  movingRect.shapeColor = "green";
  //movingRect.debug = true;

  rect1 = createSprite(150, 100, 50, 50);
  rect2 = createSprite(250, 150, 50, 50);
  rect3 = createSprite(400, 250, 50, 50);
  rect4 = createSprite(450, 350, 50, 50);
  rect1.shapeColor = "green";
  rect2.shapeColor = "green";
  rect3.shapeColor = "green";
  rect4.shapeColor = "green";
}

function draw() {
  background(0, 0, 0);
  

  if (isTouching(movingRect, fixedRect)) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  } else if (isTouching(movingRect, rect1)) {
    movingRect.shapeColor = "red";
    rect1.shapeColor = "red";
  } else if (isTouching(movingRect, rect2)) {
    movingRect.shapeColor = "red";
    rect2.shapeColor = "red";
  } else if (isTouching(movingRect, rect3)) {
    movingRect.shapeColor = "red";
    rect3.shapeColor = "red";
  } else if (isTouching(movingRect, rect4)) {
    movingRect.shapeColor = "red";
    rect4.shapeColor = "red";
  } else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    rect1.shapeColor = "green";
    rect2.shapeColor = "green";
    rect3.shapeColor = "green";
    rect4.shapeColor = "green";
  }

  //calling  a function
 bounceOff(movingRect, fixedRect);



  drawSprites();
}

