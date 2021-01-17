//variables
var canvas;
var music;
var red, green, yellow, blue;
var box;
var edges

function preload(){
    //sound
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    red = createSprite(100,575,175,15);
    red.shapeColor = 'red';
    yellow = createSprite(300,575,175,15);
    yellow.shapeColor = 'yellow';
    green = createSprite(500,575,175,15);
    green.shapeColor = 'green';
    blue = createSprite(700,575,175,15);
    blue.shapeColor = 'blue'


    //create box sprite and give velocity
    box = createSprite(random(20,750),100,40,40);
    box.shapeColor = 'white';
    box.velocityY = 10;
    box.velocityX = random(-5,5);

}

function draw() {
    background('skyblue');
    //create edgeSprite
    edges = createEdgeSprites();

    box.bounceOff(edges);

 
    //add condition to check if box touching surface and make it box
    if((red.x - box.x < red.width/2 + box.width/2) &&
    (box.x - red.x < red.width/2 + box.width/2) 
    &&(red.y - box.y < red.height/2 + box.height/2) &&
    (box.y - red.y < red.height/2 + box.height/2)){
      box.shapeColor = "red";
      box.velocityY = box.velocityY*-1;
    }

    else if((blue.x - box.x < blue.width/2 + box.width/2) &&
    (box.x - blue.x < blue.width/2 + box.width/2) 
    &&(blue.y - box.y < blue.height/2 + box.height/2) &&
    (box.y - blue.y < blue.height/2 + box.height/2)){
      box.shapeColor = "blue";
      box.velocityY = box.velocityY*-1;
    }

    else if((green.x - box.x < green.width/2 + box.width/2) &&
    (box.x - green.x < green.width/2 + box.width/2)
     &&(green.y - box.y < green.height/2 + box.height/2) &&
    (box.y - green.y < green.height/2 + box.height/2)){
      box.shapeColor = "green";
      box.velocityY = box.velocityY*-1;
    }

    else if((yellow.x - box.x < yellow.width/2 + box.width/2) &&
    (box.x - yellow.x < yellow.width/2 + box.width/2) 
    &&(yellow.y - box.y < yellow.height/2 + box.height/2) &&
    (box.y - yellow.y < yellow.height/2 + box.height/2)){
      box.shapeColor = "yellow";
      box.velocityY = box.velocityY*-1;
    }

    drawSprites();
}
