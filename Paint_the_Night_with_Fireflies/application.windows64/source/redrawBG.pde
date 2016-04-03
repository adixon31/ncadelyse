void redrawBackground(){
  frameRate(10);
  background(18, 54, 94);
  stroke(18, 54, 94);
  fill(255, num2);
    if(num >= 3)
      fill(255);
  num++;
  num2 = num2 + 20;
  ellipse(95, 60, 70, 70);
  fill(18,54,94);
  ellipse(105,50, 70,70);
  fill(26,51,0);
  rect(0, 380, 679, 99); 

  jar();
  fill(255);
  PFont myFont = createFont("Bodoni MT", 14);
  textFont(myFont);
  text("Click: Create a Fly! \nClick and Drag: Paint the Night!. \nClick the Jar: Clear the Night!", 240, 410);
  text("Click a fly: Change Fly Color!", 17, 410);
}