Sholay="";
Naacho_Naacho="";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    Sholay = loadSound("Sholay.mp3");
    Naacho_Naacho = loadSound("Naacho.mp3");
}

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}


function draw(){
    image(video,0,0,600,530);
}
function modelLoaded() {
    console.log("model loaded!");
}
function gotPoses(results) {
    if (results.length > 0) {
       console.log(results);
       leftWristX = results[0].pose.leftWrist.x;
       leftWristY = results [0].pose.leftWrist.y;
       console.log('left wrist x position = ' + leftWristX + ', left wrist y position = ' + leftWristY);
   
       rightWristX = results[0].pose.rightWrist.x;
       rightWristY = results [0].pose.rightWrist.y;
       console.log('right wrist x position = ' + rightWristX + ', right wrist y position = ' + rightWristY);
    }
   }