var face;
var leftEye = [];
var rightEye = [];
var head = [];
var mouth = [];
var center = [];
var eyeCenter = [];
// fDS : face dots shifted
var fDS = [];
var zoom = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(255);

  if (face != undefined) {

    center = [
      (face.vertices[0 * 2] + (face.vertices[16 * 2] - face.vertices[0 * 2]) / 2) *2,
      (face.vertices[1 * 2 + 1] + (face.vertices[15 * 2 + 1] - face.vertices[1 * 2 + 1]) / 2)*2,
    ];

    for (var i = 0; i < face.vertices.length; i += 2) {
      fDS[i / 2] = [face.vertices[i]*2 - center[0], face.vertices[i + 1]*2 - center[1]];
    }

    head = [
      0, 0,
      fDS[16][0] - fDS[0][0],
      (fDS[8][1] - fDS[29][1]) * 2
    ];

    leftEye = [
      fDS[41][0] + (fDS[40][0] - fDS[41][0]),
      fDS[41][1],
      fDS[40][0] - fDS[41][0],
      fDS[40][1] - fDS[38][1],
    ]
    rightEye = [
      fDS[47][0] + (fDS[46][0] - fDS[47][0]) / 2,
      fDS[46][1],
      fDS[46][0] - fDS[47][0],
      fDS[47][1] - fDS[43][1],
    ]
    mouth = [
      fDS[60][0] + (fDS[64][0] - fDS[60][0]) / 2,
      fDS[62][1],
      fDS[64][0] - fDS[60][0],
      fDS[66][1] - fDS[62][1],
    ]

    var a = atan2(fDS[16][0] - fDS[0][0], fDS[16][1] - fDS[0][1]);

    push();
    translate(center[0], center[1]);
    rotate(-a + 90);
    fill(255);
    stroke(0);
    strokeWeight(4);
    ellipse(head[0], head[1], head[2] * 1.2, head[3]);
		bezier(
			fDS[48][0],fDS[48][1]*0.95,
			fDS[67][0],fDS[67][1],
			fDS[65][0],fDS[65][1],
			fDS[54][0],fDS[54][1]*0.95,
		);
		bezier(
			fDS[48][0],fDS[48][1]*0.95,
			fDS[61][0],fDS[61][1],
			fDS[63][0],fDS[63][1],
			fDS[54][0],fDS[54][1]*0.95,
		);
    pop();

    push();
    translate(center[0], center[1]);
    rotate((-a + 90));
    // console.log(-a, -a + 90, (-a + 90) / 2);
    fill(0);
    ellipse(leftEye[0], leftEye[1], leftEye[2] * 1.2, leftEye[3] * 1.2);
		// bezier(
		// 	fDS[37][0],fDS[37][1],
		// 	fDS[38][0],fDS[38][1],
		// 	fDS[40][0],fDS[40][1],
		// 	fDS[41][0],fDS[41][1],
		// );
		// bezier(
		// 	fDS[38][0],fDS[38][1],
		// 	fDS[37][0],fDS[37][1],
		// 	fDS[41][0],fDS[41][1],
		// 	fDS[40][0],fDS[40][1],
		// );
    ellipse(rightEye[0], rightEye[1], rightEye[2] * 1.2, rightEye[3] * 1.2);

    pop();

    // for (var k = 0; k < fDS.length; k += 1) {
    //   let x = fDS[k][0];
    //   let y = fDS[k][1];
    //   noStroke();
    //   fill(200);
    // 	push();
    // 	translate(center[0],center[1]);
    //   ellipse(x, y, 2, 2);
    // 	pop();
    // }
  }
}
