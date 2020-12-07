let img;
let objectDetector;
let object;

function preload() {
	img = loadImage('./images/gty_cat_dog_portrait.jpg');
	objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded() {
	console.log('Model Loaded!');
  }

function gotDetections(error, results) {
	if (error) {
		console.log(error);
	}
	console.log(results);
	for (i = 0; i < results.length; i++) {
		let object = results[i];
		stroke(0, 255, 0);
		strokeWeight(4);
		noFill();
		rect(object.x, object.y, object.width, object.height);
		noStroke();
		fill(0);
		textSize(24);
		text(object.label, object.x+10, object.y+24);
		noStroke();
		fill(255);
		textSize(20);
		let confidence = nf(object.confidence, 0, 3);
		text(confidence, object.x+60, object.y+150);
		console.log(object.label);
	}
}

function setup() {
	createCanvas(640, 480);
	image(img, 0, 0);
	objectDetector.detect(img, gotDetections);
}

function draw() {

}