import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class Paint_the_Night_with_Fireflies extends PApplet {

Firefly fly;
Firefly glide;
Firefly p;
ArrayList flies = new ArrayList();;
ArrayList stream = new ArrayList();;
ArrayList paint = new ArrayList();;
ArrayList flyjar = new ArrayList();;
ArrayList<Star> stars = new ArrayList();
int pos = 340, pos0 = 200, pos1 = 51, pos2 = 153, pos3 = 204, num = 1, num2 = 106, num3 = 0, num4 = 0;
int c = color(204,153,0);
int white = color(255), fadedWhite = color(255, 50), dusk=color(70, 64, 104), 
  night=color(28, 59, 86), gold= color(218, 215, 57), 
  fadedGold=color(218, 215, 57, 50), grass = color(9,95,54), 
  grey = color(185,191,188), purple = color(113,13,142); //color(5,95,52)
int numStars = 15, flySize = 12, maxFlies = 5;
Star star;


public void setup(){
  
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

public void net(float a, float b){
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

public void mousePressed(){
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

public void mouseDragged(){
  if(mouseY <= 380){
  p = new Firefly(mouseX, mouseY, c, 255);
  paint.add(p);
  }
  
}

public void jar(){
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

public void stars(){
  for (Star star : stars) {
    star.blink();
    star.display();
  }
} 

public void clear(){
  flies = new ArrayList();
  paint = new ArrayList();
}

public void colorChange(int d){
  c = d;
}

public void checkSize(){
  if(flies.size() >= 5){
    Firefly f = (Firefly) flies.get(0);
    f.fade(1);
  }
  
}

public void fireFly(float a, float b, int l){
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

public void colorFlies(){
  fireFly(25, 435, color(204,153,0));
   fireFly(50, 435, color(61, 245, 0));
   fireFly(75, 435, color(255, 0, 0));
   fireFly(100, 435, color(255, 0, 102));
   fireFly(125, 435, color(51, 204, 204)); 
}

public void draw(){
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
class Firefly{
  float a, b, f = random(266), randy, randy2, randy3, randy4, inner = 10.0f, outer = 16.0f, center = 2.0f;
  int star;
  int o;
  int t = 20;
  float stayX, stayY;
  Firefly(float c, float d, int e, float h){
    a = c;
    b = d;
    stayX = c;
    stayY = d; 
    o = e;
    f = h;
  }
  Firefly(float c, float d, int s){
    a = c;
    b = d; 
    stayX = c;
    stayY = d;
    o = color(255); 
    star = s;
  }
 
    public void display(){
      stroke(o, f);
      fill(o, f);
      ellipse(a, b, inner, inner);
      stroke(o, f/2);
      fill(o,f/2);
      ellipse(a, b, outer, outer);
      stroke(255, f);
      fill(255, f);
      ellipse(a,b, center,center);
    }
    public void display2(){
      stroke(18, 54, 94, f);
      fill(o, f);
      ellipse(a, b, star, star); 
    }
    
    public void display3(){
      stroke(o, f);
      fill(o, f);
      ellipse(stayX, stayY, inner, inner);
      stroke(o, f/2);
      fill(o,f/2);
      ellipse(stayX, stayY, outer, outer);
      stroke(255, f);
      fill(255, f);
      ellipse(stayX, stayY, center,center);
    }
    
    public void move(){
      randy = random(10);
      randy2 = random(10);
      translate(randy, randy2);
    }
    
    public void move2(){
      randy2 = random(1);
      translate(0, randy2);
    }
    
    public void fade(int h){
      if(h == 1){
        if(f > 0){
        f = f - 10;
        }
        if(f <= 0)
          flies.remove(0);
        }
      else if(h == 2){
        if(f > 0){
        f = f - 10;
        }
        if(f <= 0)
          paint.remove(0);
        }
    }
    
    public void fade2(){
      if(num4 <=0 && num4 > -10){
        f = f - 10;
        num4--;
      }
      else if(num4 == -10)
        num4 = 10;
      else if(num4 <= 10 && num4 > 0){
        f = f + 10;
        num4--;
      }
    }
    
    public int timer(){
      if (t != 2){
        t--;
      }
      return t;
    }    
    
    public void setX(float val){
      a = a - val;
    }
    
    public void setY(float value){
      b = b - value;
    }
}
class Jar{
  int x,y;
  int c, c2;
  
  Jar(int a, int b){
    x = a;
    y = b;
    c = grey;
    c2 = purple;
  }
  
  public void display(){
   fill(c,90);
   stroke(c);
   rect(x,y, 60,80, 7);
   fill(c2);
   noStroke();
   rect(x, y-15, 60, 15,7);
  }

}
class Star {
  int c, c2;
  float x, y;
  float size, maxSize;
  boolean dec = true;
  Star() {
    c = white;
    c2 = fadedWhite;
    maxSize = random(3, 10);
    size = maxSize;
    x = random(5, 556);
    y = random(5, 306);
  }
  public void blink() {
    if (frameCount % 2 ==0) {
      if (dec == true) {
        if (size > 0) {
          size--;
        } else {
          dec = false;
          blink();
        }
      } else {
        if (size < maxSize) {
          size++;
        } else {
          dec = true;
          blink();
        }
      }
    }
  }
  public void display() {
    fill(c2);
    ellipse(x, y, size+3, size+3);
    fill(c);
    ellipse(x, y, size, size);
  }
}
public void redrawBackground(){
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
public void redrawBackground2(){
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
  public void settings() {  size(680,480); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "Paint_the_Night_with_Fireflies" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
