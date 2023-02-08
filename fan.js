status1 = "";
objects = [];
img = "";


function setup(){
    canvas = createCanvas(300,470);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";



}

function preload(){
    img = loadImage('fan.jpeg');
}

function draw(){

    image(img,0,0,300,470);

    if(status1 != ""){
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Objects Detected";
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x , objects[i].y - 1025 );
            console.log(objects[i].label + " " + percent + "%", objects[i].x , objects[i].y - 1025 );
            console.log(i);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y - 1025, objects[i].width, objects[i].height);
            document.getElementById("object_number").innerHTML = "There is 1 big object in the picture from which CocoSsd has detected 1";
            
        }
    }
}

function modelLoaded(){

    status1 = true;
    objectDetector.detect(img,gotResults);

}

function gotResults(error,results){

    if(error){
        console.log(error);

    }
    console.log(results);
    objects = results;
}



function back(){
    window.location.href = "index.html"};