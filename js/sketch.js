console.log("Hello world!");

var stickOne = false;
var stickTwo = false;
var stickThree = false;

var stickX;
var stickY = 0;

var d;


function setup() {
    var myCanvas = createCanvas(800,250);
    //link to id mySketch for header tag
    myCanvas.parent('mySketch');
    
    background(255);
}

function draw() {
    drawOptions();
    drawCircles();
    
}


// Draw random circles interaction
function drawCircles() {
    stickX = 735;
    
    //Boolean quadrants for color options
    if (mouseX > stickX && mouseY < height/4) {
        if(mouseIsPressed) {
            stickOne = true;
            stickTwo = false;
            stickThree = false;
        } 
    } 
    if (mouseX > stickX && mouseY>height/4 && mouseY<height/4*2) {
        if (mouseIsPressed) {
            stickTwo = true;
            stickOne = false;
            stickThree = false;
        }
    }
    if (mouseX > stickX && mouseY > height/2 && mouseY<height/2+height/4) {
        if (mouseIsPressed) {
            stickThree = true;
            stickOne = false;
            stickTwo = false;
        }
    }
    if (mouseX > stickX && mouseY > height/2+height/4) {
        if (mouseIsPressed) {
            stickThree = false;
            stickOne = false;
            stickTwo = false;
            background(255);
        }
    }
    //randomize size of circles
    d = random(0,250);
    
    //draw circle types 
    if (stickOne) {
        if (mouseIsPressed) {
            rectMode(CENTER);
            stroke(230,53,80);
            fill(255,44,90,40); //cherry red
            ellipse(mouseX,mouseY,d,d);
        }   
    } else if (stickTwo) { 
        if (mouseIsPressed) {
            ellipseMode(CENTER);
            stroke(5,87,112);
            fill(1,87,112,40);  //teal
            ellipse(mouseX,mouseY,d,d);
        }    
    } else if (stickThree) {
        if (mouseIsPressed) { 
            stroke(72,67,89);
            fill(51,48,69,40); //dark purple
            ellipse(mouseX,mouseY,d,d);
        }
    }  
    /*
    if (mouseX > stickX && mouseY < stickY+height/3) {
        if(mouseIsPressed) {
            stickOne = true;
            stickTwo = false;
            stickThree = false;
        } 
    } 
    if (mouseX > stickX && mouseY > stickY+height/3 && mouseY<stickY+(height/3*2)) {
        if (mouseIsPressed) {
            stickTwo = true;
            stickOne = false;
            stickThree = false;
        }
    }
    if (mouseX > stickX && mouseY > stickY+(height/3*2) && mouseY<stickY+(height/3*3)) {
        if (mouseIsPressed) {
            stickThree = true;
            stickOne = false;
            stickTwo = false;
        }
    }
    
    //stickOne small circle orange
    if (stickOne) {
        if (mouseIsPressed) {
            rectMode(CENTER);
            noStroke();
            fill(255,137,59,55); //orange
            ellipse(mouseX,mouseY,30,30)
        }   
    } 
    if (stickTwo) { //stickTwo button
        if (mouseIsPressed) {
            ellipseMode(CENTER);
            noStroke();
            fill(232,250,117,55); //lime green
            ellipse(mouseX,mouseY,50,50)
        }    
    } 
    if (stickThree) {
    //stickThree square button
        if (mouseIsPressed) {
            noStroke();
            fill(204,157,179,55);  //dusty rose
            ellipse(mouseX,mouseY,60,60);
        }
    }
    */
}
function drawOptions() {
    stickX = 755;
    stickY = height/4;
    
    rectMode(CENTER);
    //one rect and circle
    noStroke();
    //fill(255);  //white background behind circle options
    //rect(stickX, stickY-height/8,90,height/4);
    fill(255,44,90); //cherry red
    ellipse(stickX,stickY-height/8,40,40);
    
    //two rect and circle
    noStroke();
    //fill(255);  //white background behind circle options
    //rect(stickX,stickY+height/8,90,height/4);
    fill(1,87,112); //teal
    ellipse(stickX,stickY+height/8,40,40);
    
    //three rect and circle
    noStroke();
    //fill(255); //white background behind circle options
    //rect(stickX,(stickY*3)-height/8,90,height/4);
    fill(72,67,84);  //dark purple
    ellipse(stickX,(stickY*3)-height/8,40,40)
    
    //four circle for clear
    noStroke();
    //fill(255); //white background behind circle options
    //rect(stickX,(stickY*3)+height/8,90,height/4);
    stroke(50);
    fill(255);  //dusty rose
    ellipse(stickX,(stickY*3)+height/8,40,40)   
}