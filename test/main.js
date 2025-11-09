let fx = 0;
let fy = 0;
let t = 0;
let pipes = [];
let mushroom;
let flowers = []; 




function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  noFill();

  let boxSize = 600;
  let half = boxSize / 2;
  mushroom = random(4, 7);

  for (let i = 0; i < 13; i++) {
    let x = random(-half - 20, half + 20);
    let z = random(-half - 20, half + 20);
    let height = random(50, 500);
    let radius = random(8, 30);

    let c = color(
      100 + 100 * noise(x * 0.1, z * 0.1),
      100 + 100 * noise(z * 0.1, x * 0.1),
      200
    );
    let rustColor = color(
      170 + random(-30, 30),
      70 + random(-20, 20),
      40 + random(-20, 20)
    );

    pipes.push({ x, z, height, radius, c, rustColor });
  }

  


  let num = int(random(3, 30));
  for (let i = 0; i < num; i++) {
    flowers.push(new Flower());
  }
}





function draw() {
  let r = noise(t + 100) * 255;
  let g = noise(t + 100) * 255;
  let b = noise(t + 200) * 255;

  background(180, 180, 200);
  t += 0.01;


  ambientLight(148, 86, 36);
  directionalLight(255, 255, 255, 0.3, -0.5, -1);
  pointLight(120, 150, 255, 0, 0, 200);

  //fruitfly
  push();

  resetMatrix();
  translate(-width / 2, -height / 2, 300);
  let mx = mouseX;
  let my = mouseY;
  let easing = 0.05;
  fx += (mx - fx) * easing;
  fy += (my - fy) * easing;

  let angle = map(sin(frameCount * 60), -1, 1, 10, 140);
  fill(0);
  arc(fx, fy, 60, 80, -angle / 2, angle / 2);
  fill(0);
  arc(fx, fy, 60, 80, 180 - angle / 2, 180 + angle / 2);
  fill("gray");
  arc(fx, fy, 60, 50, -angle / 2, angle / 2);
  fill("gray");
  arc(fx, fy, 60, 50, 180 - angle / 2, 180 + angle / 2);
  pop();

  //fruitfly1
  push();
  translate(width / 2 + 200, height / 2 + 200, -100);
  let theone = int(random(1, 225));
  fill(theone, theone, theone);
  arc(-fx * 1.5 - 60, -fy * 1.9 - 60, 30, 50, -angle / 2, angle / 2);
  fill(theone, theone, theone);
  arc(-fx * 1.5 - 60, -fy * 1.9 - 60, 30, 50, 180 - angle / 2, 180 + angle / 2);
  fill("blue");
  arc(-fx * 1.5 - 60, -fy * 1.9 - 60, 30, 40, -angle / 2, angle / 2);
  fill("blue");
  arc(-fx * 1.5 - 60, -fy * 1.9 - 60, 30, 40, 180 - angle / 2, 180 + angle / 2);
  pop();

  //fruitfly2
  push();
  translate(width / 2, height / 2, -200);
  fill(245, 122, 122);
  arc(-fx / 1.5, -fy / 1.2, 40, 40, -angle / 2, angle / 2);
  fill(245, 122, 122);
  arc(-fx / 1.5, -fy / 1.2, 40, 40, 180 - angle / 2, 180 + angle / 2);
  fill(188, 205, 215);
  arc(-fx / 1.5, -fy / 1.2, 40, 80, -angle / 2, angle / 2);
  fill(188, 205, 215);
  arc(-fx / 1.5, -fy / 1.2, 40, 80, 180 - angle / 2, 180 + angle / 2);
  rotateY(30);
  rotateX(30);
  pop();

  //fruitfly3
  push();
  translate(width / 2 - 1000, height / 2 - 600, -300);
  fill("blue");
  arc(fx / 1.2, fy / 2, 20, 40, -angle / 2, angle / 2);
  fill("blue");
  arc(fx / 1.2, fy / 2, 20, 40, 180 - angle / 2, 180 + angle / 2);
  fill(240, 191, 76);
  arc(fx / 1.2, fy / 2, 40, 50, -angle / 2, angle / 2);
  fill(240, 191, 76);
  arc(fx / 1.2, fy / 2, 40, 50, 180 - angle / 2, 180 + angle / 2);
  pop();

  orbitControl();






  // yellow circle
  push();
  translate(0, 0, -100);
  fill(255, 255, 0);
  noStroke();
  circle(0, 0, 100);
  pop();

  push();
  drawingContext.disable(drawingContext.DEPTH_TEST);
  fill(r, g, b, 40);
  stroke(114, 102, 75);
  strokeWeight(7);
  box(600);
  blendMode(BLEND);
  drawingContext.enable(drawingContext.DEPTH_TEST);
  pop();

  let half = 300;






  // 管道绘制
  for (let p of pipes) {
    push();
    translate(p.x, half - p.height / 2, p.z);
    fill(154, 164, 188);
    noStroke();

    for (let y = 0; y < p.height; y += 20) {
      let thick = p.radius;
      push();
      translate(0, y - p.height / 2, 0);
      cylinder(thick, 20, 12, 1);
      pop();
    }

    // 顶盖
    push();
    translate(0, -p.height / 2 - 10, 0);
    fill(p.rustColor);
    noStroke();
    rotateX(180);
    cone(p.radius * mushroom, (p.height * mushroom) / (p.radius + 10), 16, 1);
    pop();

    pop();
  }

  
  push();
  for (let f of flowers) {
    f.update();
    f.draw();
  }
  pop();







  // 背后渐变光晕
  push();
  translate(0, 0, -1000);
  let layers = 10;
  for (let i = layers; i > 0; i--) {
    let r = i * 2;
    let inter = map(i, 0, layers, 0, 1);
    let c = lerpColor(color(255, 200, 0), color(255, 0, 200), inter);
    fill(c);
    noStroke();
    ellipse(0, 0, r, r);
  }
  pop();

  text(`${mouseX}, ${mouseY}`, 20, 20);
}




//the floating flower thing
class Flower {
  constructor() {
    this.x = random(-600 / 2, 600 / 2);
    this.y = random(-600 / 2, 600 / 2);
    this.z = random(-200, 200);
    this.vx = random(-2, 2);
    this.vy = random(-2, 2);
    this.vz = random(-1, 1);
    this.r = random(3, 25);
    this.c = color(random(200, 255), random(200, 255), random(200, 255), random(0,80));
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.z += this.vz;


    // 边界反弹
    if (this.x < -600 / 2 || this.x > 600 / 2) this.vx *= -1;
    if (this.y < -600 / 2 || this.y > 600 / 2) this.vy *= -1;
    if (this.z < -300 || this.z > 300) this.vz *= -1;
  }

  draw() {
    push();
    translate(this.x, this.y, this.z);
    fill(this.c);
    noStroke();
    sphere(this.r);
    pop();
  }
}