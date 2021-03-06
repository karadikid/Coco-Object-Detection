let video;
let objectDetector;
let object;
let detections = [];

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
	detections = results;
		//setTimeout (() => { console.log(detections.label); }, 500);
		//objectDetector.detect(video, gotDetections);
		setTimeout(() => { objectDetector.detect(video, gotDetections); }, 500);
	}

function setup() {
	createCanvas(640, 480);
	video = createCapture(VIDEO);
	video.size(640, 480);
	video.hide();
	objectDetector.detect(video, gotDetections);
}

function draw() {
	image(video, 0, 0);

	for (i = 0; i < detections.length; i++) {
		let object = detections[i];
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
	}
}