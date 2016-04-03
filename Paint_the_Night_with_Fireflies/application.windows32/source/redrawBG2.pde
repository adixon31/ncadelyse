void redrawBackground2(){
 frameRate(10);
  stroke(204, 153, 0);
   background(pos1,pos2,pos3);
   if(pos1 <= 18){
     background(18,54, 94);
   }
    pos1 = pos1 - 3;
    pos2 = pos2 - 9;
    pos3 = pos3 - 10;
  fill(255,128,0);
  ellipse(pos, pos0, 340, 340);
  fill(51,102,0);
  if(pos1 <= 21)
    fill(40,77,0);
  rect(0, 380, 679, 99); 
}