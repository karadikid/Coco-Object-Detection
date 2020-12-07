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
		rect(object.x, object.y, object.width, object.height)
	}
}

function setup() {
	createCanvas(640, 480);
	image(img, 0, 0);
	objectDetector.detect(img, gotDetections);
}

function draw() {

}