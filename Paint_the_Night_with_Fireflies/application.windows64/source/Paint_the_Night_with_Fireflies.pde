Firefly fly;
Firefly glide;
Firefly p;
ArrayList flies = new ArrayList();;
ArrayList stream = new ArrayList();;
ArrayList paint = new ArrayList();;
ArrayList flyjar = new ArrayList();;
ArrayList<Star> stars = new ArrayList();
int pos = 340, pos0 = 200, pos1 = 51, pos2 = 153, pos3 = 204, num = 1, num2 = 106, num3 = 0, num4 = 0;
color c = color(204,153,0);
color white = color(255), fadedWhite = color(255, 50), dusk=color(70, 64, 104), 
  night=color(28, 59, 86), gold= color(218, 215, 57), 
  fadedGold=color(218, 215, 57, 50), grass = color(9,95,54), 
  grey = color(185,191,188), purple = color(113,13,142); //color(5,95,52)
int numStars = 15, flySize = 12, maxFlies = 5;
Star star;


void setup(){
  size(680,480);
  frameRate(20);
  noStroke();
  noCursor();
  randomSeed(9);
  
  //Create Stars
  for (int i = 0; i<numStars; i++) {
    star = new Star();
    star.display();
    stars.add(star);
  }
}

void net(float a, float b){
  stroke(255);
  fill(255, 100);
  arc(a + 7, b , 20, 25, 0, 90);
  stroke(128, 51, 204);
  fill(128, 51, 204);
  ellipse(a,b, 10, 30);
  fill(255, 100);
  ellipse(a, b, 5, 15);
  fill(128, 51, 204);
  rect(a, b + 15, 1, 25);
}

void mousePressed(){
  if(mouseY <= 380){
  fly = new Firefly(mouseX, mouseY, c, 255);
  flies.add(fly);
  }
  if(mouseY >= 430 && mouseY<=450){
    if(mouseX < 45)
      colorChange(color(204,153,0));
    if(mouseX < 67 && mouseX > 45)
      colorChange(color(61, 245,0));
    if(mouseX < 95 && mouseX > 67)
      colorChange(color(255,0,0));
    if(mouseX < 120 && mouseX > 95)
      colorChange(color(255, 0, 102));
    if(mouseX < 140 && mouseX > 120)
      colorChange(color(51, 204,204));
    }
  if(mouseY >= 350 && mouseY <= 440 && mouseX > 600 && mouseX <= 670)
    clear();
}

void mouseDragged(){
  if(mouseY <= 380){
  p = new Firefly(mouseX, mouseY, c, 255);
  paint.add(p);
  }
  
}

void jar(){
  flyjar = new ArrayList();
  Jar jar = new Jar(600, 350);
  jar.display();
  Firefly j = new Firefly(635, 380, c, 47);
  Firefly k = new Firefly(645, 395, c, 72);
  Firefly l = new Firefly(627, 402, c, 100);
  flyjar.add(j);
  flyjar.add(k);
  flyjar.add(l);
}

void stars(){
  for (Star star : stars) {
    star.blink();
    star.display();
  }
} 

void clear(){
  flies = new ArrayList();
  paint = new ArrayList();
}

void colorChange(color d){
  c = d;
}

void checkSize(){
  if(flies.size() >= 5){
    Firefly f = (Firefly) flies.get(0);
    f.fade(1);
  }
  
}

void fireFly(float a, float b, color l){
   stroke(l);
   fill(l);
   ellipse(a, b, 10, 10);
   stroke(l, 126);
   fill(l,126);
   ellipse(a, b, 16, 16);
   stroke(255);
   fill(255);
   ellipse(a,b, 2,2);
}

void colorFlies(){
  fireFly(25, 435, color(204,153,0));
   fireFly(50, 435, color(61, 245, 0));
   fireFly(75, 435, color(255, 0, 0));
   fireFly(100, 435, color(255, 0, 102));
   fireFly(125, 435, color(51, 204, 204)); 
}

void draw(){
  frameRate(10);
  stroke(204, 153, 0);
  background(255,0,0);
  fill(255,128,0);
  ellipse(pos, pos0, 340, 340);
  fill(51,102,0);
  rect(0, 380, 679, 99); 
  pos0 = pos0 + 10; 
  
  if(pos0 >= 340 && pos0 < 600)
    redrawBackground2();
  
  if(pos1 <= 18 && pos0 >=580){
     pos1 = 18;
     pos0 = 580;
     redrawBackground();
     if(mouseY <= 380){
       net(mouseX, mouseY);
       noCursor();
     }
     if(mouseY > 380){
       cursor();
     }
     
     colorFlies();
     stars();
     
      for(int i = 0; i < flyjar.size(); i++){
        Firefly here = (Firefly) flyjar.get(i);
        here.fade2();
        here.display();
      }
      for(int i = 0; i < flies.size(); i++){
         Firefly f = (Firefly) flies.get(i);
         f.fade2();
         f.display();
       }
       for(int i = 0; i < paint.size(); i++){
          Firefly f = (Firefly) paint.get(i);
          
          f.display();
          f.fade(f.timer());
      
      } 
     checkSize();
    }
  
}