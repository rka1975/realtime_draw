noseX=0
noseY=0
difference=0
right_wristX=0
left_wristX=0

function setup(){
    video = createCapture(VIDEO);
    video.size(600,400);
    video.position(40,150)
    
    canvas=createCanvas(450,450);
    canvas.position(700,150)

    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}

function draw(){
    background("gray")
    fill("#B52C9E");
    stroke("#B52C9E");
    text("Prisha",noseX,noseY);
    textSize(difference);
    document.getElementById("square-side").innerHTML="Width and Height Will Be:"+difference+"px";
}

function modelLoaded(){
    console.log("PoseNet is loaded")
}

function gotPoses(results){
    if (results.length>0){
        console.log(results)
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("NoseX= "+noseX+", NoseY= "+noseY);
        left_wristX=results[0].pose.leftWrist.x;
        right_wristX=results[0].pose.rightWrist.x;
        difference=floor(left_wristX-right_wristX);
        console.log("leftWrist= "+left_wristX+", rightWrist= "+right_wristX+", difference= "+difference);

    }
}
