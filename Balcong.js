function preload(){
img1=loadImage("kichen.jpg");
}

function setup(){
canvas=createCanvas(550,400);
canvas.center();
objectdetector=ml5.objectDetector("cocossd",modalloaded);
}

function draw(){
image(img1,0,0,550,400);
noFill();
stroke("black");
rect(230,190,70,60);
fill("yellow");
noStroke();
text("Tree",235,203);
}

function back(){
window.location="index.html";
}

function modalloaded(){
console.log("Modal is Loaded!");
status=true;
objectdetector.detect(img1,gotResults);
}

function gotResults(error,results){
if(error){
console.log(error);
}
console.log(results);
}
