nosex=0
nosey=0

function preload(){
 pic=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

posenet=ml5.poseNet(video,model_loaded)
posenet.on('pose',got_results);
}

function model_loaded(){
// comment
}

function draw(){
image(video,0,0,300,300);  
image(pic,nosex,nosey,30,30);
}

function take_snapshot(){
    save('My_Filtered_Pic.png');
}

function got_results(results){
    if (results.length>0) {
        console.log(results);
nosex=results[0].pose.nose.x-15;
nosey=results[0].pose.nose.y;
}
    }