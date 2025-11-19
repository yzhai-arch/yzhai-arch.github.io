let camSide, camBottom;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);

  camSide = createCamera();
  camBottom = createCamera();
}

function draw() {
  const gl = this._renderer.GL;
  gl.enable(gl.SCISSOR_TEST);

  // -------- 左侧视图 --------
  gl.scissor(0, 0, width / 2, height);
  gl.viewport(0, 0, width / 2, height);
  background(230);

  let aspectLeft = (width / 2) / height;
  camSide.perspective(60, aspectLeft, 1, 5000);

  setCamera(camSide);
  camSide.setPosition(300, 0, 0);
  camSide.lookAt(0, 0, 0);
  drawScene();

  // -------- 右侧视图 --------
  gl.scissor(width / 2, 0, width / 2, height);
  gl.viewport(width / 2, 0, width / 2, height);
  background(200);

  let aspectRight = (width / 2) / height;
  camBottom.perspective(60, aspectRight, 1, 5000);

  setCamera(camBottom);
  camBottom.setPosition(0, -300, 0);
  camBottom.lookAt(0, 0, 0);
  drawScene();

  gl.disable(gl.SCISSOR_TEST);
}

function drawScene() {
  push();
  orbitControl();
  ambientLight(150);
  directionalLight(255, 255, 255, 0.5, 1, -1);

  fill(120, 120, 200);
  box(200);

  fill(255, 0, 0);
  translate(300, 0, 0);
  sphere(50);

  pop();
}