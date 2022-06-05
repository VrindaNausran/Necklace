var NeckX=0;
var NeckY=0;

function preload(){
  Image1=loadImage("https://i.postimg.cc/MKW5C4m5/Necklace-removebg-preview.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    Video= createCapture(VIDEO);
    Video.size(300,300);
    Video.hide();
    poseNet=ml5.poseNet(Video,modelLoaded);
    poseNet.on("pose", gotPoses);
  }

  function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log( "Neck x is = "+results[0].pose.leftShoulder.x);
        console.log( "Neck y is = "+results[0].pose.leftShoulder.y);
        NeckX=results[0].pose.leftShoulder.x-90;
        NeckY=results[0].pose.leftShoulder.y-40;
    }

}

function draw(){
  image(Video,0,0,300,300);
  image(Image1,NeckX,NeckY,70,90);
  }

function take_snapshot(){
    save("image.png");
}

function modelLoaded(){
    console.log("model is Loaded ");
}