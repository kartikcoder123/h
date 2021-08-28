var box;

function setup() {
  createCanvas(400, 400);
  box = new Box(100, 100, 50, 50, 2,4)
}

function draw() {
  background(220);
  box.show()
  box.setSpeed()

}