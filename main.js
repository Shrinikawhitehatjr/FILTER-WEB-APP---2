function preload(){
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    canvas = createCapture(VIDEO)
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
 }
 tint_color = "";

function modelLoaded() {
    console.log('poseNet is initialized');
}
 
 function draw(){
 }
 
 function takeSnapshot(){
     save('myFilterImage.png');
 }
 function gotPoses() 
{
    if(Results.length > 0 );
    {
        console.log(Results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}