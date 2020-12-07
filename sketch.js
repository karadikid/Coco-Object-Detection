let img;
let objectDetector;

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
}

function setup() {
	createCanvas(640, 480);
	image(img, 0, 0);
	console.log(objectDetector)
	objectDetector.detect(img, gotDetections);
}

function draw() {

}