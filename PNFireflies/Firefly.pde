class Firefly{
  float a, b, f = random(266), randy, randy2, randy3, randy4, inner = 10.0, outer = 16.0, center = 2.0;
  int star;
  color o;
  int t = 20;
  float stayX, stayY;
  Firefly(float c, float d, color e, float h){
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
 
    void display(){
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
    void display2(){
      stroke(18, 54, 94, f);
      fill(o, f);
      ellipse(a, b, star, star); 
    }
    
    void display3(){
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
    
    void move(){
      randy = random(10);
      randy2 = random(10);
      translate(randy, randy2);
    }
    
    void move2(){
      randy2 = random(1);
      translate(0, randy2);
    }
    
    void fade(int h){
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
    
    void fade2(){
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
    
    int timer(){
      if (t != 2){
        t--;
      }
      return t;
    }    
    
    void setX(float val){
      a = a - val;
    }
    
    void setY(float value){
      b = b - value;
    }
}