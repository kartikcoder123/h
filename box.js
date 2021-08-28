class Box {
  constructor(x, y, w, h, vx, vy) {
    this.xposition = x;
    this.yposition = y;
    this.wd = w;
    this.height = h;
    this.vx = vx;
    this.vy = vy;
  }
  show() {
    rect(this.xposition, this.yposition, this.wd, this.height)
  }

  setSpeed() {
    this.xposition = this.xposition + this.vx;
    this.yposition = this.yposition + this.vy;
  }

}