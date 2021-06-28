nose_x=0;
nose_y=0;

function preload(){
    beard=loadImage("https://i.postimg.cc/T3hj3hgs/handlebar-moustache-clip-art-vector-graphics-beard-png-favpng-tqmn7uu-Qy4k6q-Uu-FLPAe-Yh-Ry-R-removebg-pre.png")
};

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,model_loaded);
    poseNet.on('pose',gotposes);
}

function model_loaded(){
    console.log("model is loaded");
    }
    
    function gotposes(result){
    if(result.length>0){
        console.log(result);
        nose_x=result[0].pose.nose.x-75;
        nose_y=result[0].pose.nose.y-50;
    console.log("nose_x=",result[0].pose.nose.x);
    console.log("nose_y=",result[0].pose.nose.y);
}
}
function draw(){
    image(video,0,0,300,300);
    image(beard,nose_x,nose_y,150,150);
}
function snap1()
{
    save('filters');
}