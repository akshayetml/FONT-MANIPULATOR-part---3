difference=0;

function preload(){}

function setup(){
    canvas=createCanvas(550,550);
    canvas.position(750,210);
    video=createCapture(VIDEO);
    video.size(560,700);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotpose);
}

function draw(){ 
    background('#E5A392');
    textSize(difference);
    fill('rgb(50,80,100)');
    text('Akshay',10,400);
}

function modelLoaded(){
    console.log("modelloaded");
}

function gotpose(result){
    if(result.length > 0){
        console.log(result);

     leftwristx=result[0].pose.leftWrist.x;
     rightwristx=result[0].pose.rightWrist.x;
     difference=floor(leftwristx-rightwristx);

        console.log(difference);
    }
}