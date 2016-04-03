class Star {
  color c, c2;
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
  void blink() {
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
  void display() {
    fill(c2);
    ellipse(x, y, size+3, size+3);
    fill(c);
    ellipse(x, y, size, size);
  }
}