noseX=0
noseY=0
diff=0
leftX=0
rightX=0
function setup(){
    video= createCapture(VIDEO)
    video.size(550, 500)

    canvas=createCanvas(550, 500)
    canvas.position (560, 150)
    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)

}
function draw(){
    document.getElementById("square_side").innerHTML="Width and Height of Square will be="+diff+"px"
    background('#33DBFF')
    fill('#FF0078')
    stroke('#00FF08')
    square(noseX, noseY, diff)
}
function modelLoaded(){
    console.log("PoseNet is Active for no absolut reason because this is a math class, not a yoga class")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y
        console.log("noseX="+noseX+" noseY"+noseY)

        leftX=results[0].pose.leftWrist.x
        rightX=results[0].pose.rightWrist.x
        diff=floor(leftX-rightX)
        console.log("leftwristX="+leftX+"rightwristX="+rightX+"diff="+diff)
    }
}

