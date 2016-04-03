class Jar{
  int x,y;
  color c, c2;
  
  Jar(int a, int b){
    x = a;
    y = b;
    c = grey;
    c2 = purple;
  }
  
  void display(){
   fill(c,90);
   stroke(c);
   rect(x,y, 60,80, 7);
   fill(c2);
   noStroke();
   rect(x, y-15, 60, 15,7);
  }

}