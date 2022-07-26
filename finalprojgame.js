var xPositions = []; // An array for the x position of the ellipses
var yPositions = []; // An array for the y position of the ellipses
var colors = []; // An array for the color of the ellipses
var speed = []; // An array for the speed of the ellipses 

//This for loop determines the x position, y position, speed, and color of the ellipses. Right now it is being pushed onto the canvas at random x and y coordinates between 0 - 400, allowing for it to fill up the screen. Speed is in between 5 and 10 and tbe color is set to white to add a space effect
for (var k = 0; k < 50; k++){ 
    yPositions.push(random(0,400)); 
    xPositions.push(random(0,400));
    colors.push(color ((255), (255), (255)));
    speed.push(random(5,10));
}

// The code that creates the bitmoji on the splash screen  
var DrawKenny = function(x,y,KennySize)
{
noStroke();
fill(34, 33, 36);//color of shirt
rect(x-37*(KennySize/150),y+44*(KennySize/150),75*(KennySize/150),80*(KennySize/150));//shirt
fill (124,80,26); //skin color 
ellipse(x,y,83*(KennySize/150),100*(KennySize/150)); //head
ellipse(x+44*(KennySize/150),y-6*(KennySize/150), 20*(KennySize/150),30*(KennySize/150)); //right ear
ellipse(x-45*(KennySize/150),y-4*(KennySize/150), 20*(KennySize/150),30*(KennySize/150));//left ear
fill (222, 188, 20);//earrings
rect (x+42*(KennySize/150),y+1*(KennySize/150),6*(KennySize/150),12*(KennySize/150));//right earring 
rect (x-47*(KennySize/150),y+1*(KennySize/150),6*(KennySize/150),12*(KennySize/150));//left earring
fill(10, 0, 0);//braids
ellipse(x-29*(KennySize/150),y-6*(KennySize/150),10*(KennySize/150),40*(KennySize/150)); //left braid
ellipse(x+28*(KennySize/150),y-7*(KennySize/150),10*(KennySize/150),40*(KennySize/150));// right braid
fill(48, 25, 32); //durag color
ellipse(x-1*(KennySize/150), y-40*(KennySize/150),84*(KennySize/150),47*(KennySize/150));//top durag
quad (x-24*(KennySize/150),y-45*(KennySize/150),x-36*(KennySize/150),y-16*(KennySize/150),x+29*(KennySize/150),y-17*(KennySize/150),x+23*(KennySize/150),y-48*(KennySize/150)); //durag center
arc(x+31*(KennySize/150),y-35*(KennySize/150),22*(KennySize/150),37*(KennySize/150),0*(KennySize/150),360*(KennySize/150)); //durag right side 
arc(x-36*(KennySize/150),y-34*(KennySize/150),15*(KennySize/150),37*(KennySize/150),0*(KennySize/150),360*(KennySize/150)); //durag left side 
fill(10, 0, 0);// eye color
ellipse(x-16*(KennySize/150),y-5*(KennySize/150),11*(KennySize/150),11*(KennySize/150)); // left eye
ellipse(x+13*(KennySize/150),y-5*(KennySize/150),11*(KennySize/150),11*(KennySize/150)); //right eye
stroke(10, 0, 0);
fill(124,80,26);//nose+mouth
bezier(x,y,x+21*(KennySize/150),y+22*(KennySize/150),x-10*(KennySize/150),y+20*(KennySize/150),x-3*(KennySize/150),y+15*(KennySize/150));//nose
arc(x-1*(KennySize/150),y+25*(KennySize/150),30*(KennySize/150),13*(KennySize/150),1,180);//mouth
line(x-21*(KennySize/150),y+102*(KennySize/150),x-20*(KennySize/150),y+72*(KennySize/150));//inital
line(x-20*(KennySize/150),y+91*(KennySize/150),x-7*(KennySize/150),y+72*(KennySize/150));//intial
line(x-5*(KennySize/150),y+102*(KennySize/150),x-14*(KennySize/150),y+84*(KennySize/150));//intial
line(x+7*(KennySize/150),y+102*(KennySize/150),x+7*(KennySize/150),y+70*(KennySize/150));//intial
fill(34, 33, 36);
arc(x+8*(KennySize/150),y+86*(KennySize/150),27*(KennySize/150),33*(KennySize/150),272,446);//intial
};

// The code that creates the bitmoji on the splash screen
var onehalf = function(bodyX, bodyY, bitheight){
fill(0, 0, 0);
ellipse(bodyX + bitheight/250*50, bodyY + bitheight/250*50, bitheight/250*59, bitheight/250*74);//hoodie
fill(122, 92, 66);
ellipse(bodyX + bitheight/250*50, bodyY + bitheight/250*54, bitheight/250*52, bitheight/250*67);//face
fill(0, 0, 0);
triangle(bodyX + bitheight/250*57, bodyY + bitheight/250*100, bodyX - bitheight/250*5, bodyY + bitheight/250*100, bodyX + bitheight/250*27, bodyY + bitheight/250*71);//hoodie
triangle(bodyX + bitheight/250*110, bodyY + bitheight/250*100, bodyX + bitheight/250*42, bodyY + bitheight/250*100, bodyX + bitheight/250*73, bodyY + bitheight/250*71);//hoodie
rect(bodyX +bitheight/250*34, bodyY + bitheight/250*88, bitheight/250*30, bitheight/250*10);//hoodie
fill(255, 255, 255);
ellipse(bodyX + bitheight/250*60, bodyY + bitheight/250*50, bitheight/250*12, bitheight/250*4);//eyes
ellipse(bodyX + bitheight/250*40, bodyY + bitheight/250*50, bitheight/250*12, bitheight/250*4);//eyes
fill(0, 0, 0);
ellipse(bodyX + bitheight/250*59, bodyY + bitheight/250*50, bitheight/250*4, bitheight/250*2);//eyes
ellipse(bodyX + bitheight/250*42, bodyY + bitheight/250*50, bitheight/250*3, bitheight/250*2);//eyes
line(bodyX + bitheight/250*65, bodyY + bitheight/250*45, bodyX + bitheight/250*54, bodyY + bitheight/250*46);//eyebrows
line(bodyX + bitheight/250*35, bodyY + bitheight/250*45, bodyX + bitheight/250*47, bodyY + bitheight/250*46);//eyebrows
fill(92, 41, 66);
noStroke();
bezier(bodyX + bitheight/250*50, bodyY + bitheight/250*63, bodyX + bitheight/250*40, bodyY + bitheight/250*62, bodyX + bitheight/250*61, bodyY + bitheight/250*75, bodyX + bitheight/250*51, bodyY + bitheight/250*50);//nose
};
var otherhalf = function(bodyX, bodyY, bitheight){
fill(20, 12, 12);
rect(bodyX + bitheight/250*31, bodyY + bitheight/250*21, bitheight/250*35, bitheight/250*10);//hair
rect(bodyX + bitheight/250*59, bodyY + bitheight/250*21, bitheight/250*10, bitheight/250*10);//hair
rect(bodyX + bitheight/250*25, bodyY + bitheight/250*30, bitheight/250*7, bitheight/250*10);//hair
rect(bodyX + bitheight/250*67, bodyY + bitheight/250*30, bitheight/250*7, bitheight/250*10);//hair
fill(92, 41, 41);
stroke(122, 92, 66);
ellipse(bodyX + bitheight/250*50, bodyY + bitheight/250*71, bitheight/250*17, bitheight/250*3);//top lip
fill(120, 63, 74);
arc(bodyX + bitheight/250*50, bodyY + bitheight/250*72, bitheight/250*14, bitheight/250*10, 0, 180);//bottom lip
noStroke();
fill(10, 1, 1);
rect(bodyX + bitheight/250*71, bodyY + bitheight/250*39, bitheight/250*5, bitheight/250*34);
rect(bodyX + bitheight/250*24, bodyY + bitheight/250*39, bitheight/250*5, bitheight/250*34);
ellipse(bodyX + bitheight/250*30, bodyY + bitheight/250*82, bitheight/250*2, bitheight/250*34);
ellipse(bodyX + bitheight/250*70, bodyY + bitheight/250*82, bitheight/250*2, bitheight/250*34);
fill(255, 0, 0);
text("DAF", bodyX + bitheight/300*64, bodyY + bitheight/250*96);
};

var drawBitmoji = function(bodyX, bodyY, bitheight){
   onehalf(bodyX, bodyY, bitheight);
   otherhalf(bodyX, bodyY, bitheight);
};

var changeColor;
var shipSpeed = [];
var scene = 1;
var Lives = 5;
var numRocks = random(1000,2000);
var score = 0;

//This function chooses an image for the ship and sets up variables at which the ship's x coordinate, y coordinate, and height can be constructed at
var Ship = function(x, y, height) {
    this.x = x;
    this.y = y;
    this.img = getImage("space/rocketship");
};

//variable that constructs the button 
var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
    this.newColor = config.newColor || color(0, 21, 255);
};

//Allows for the button to change color 
Button.prototype.changeColor = function(newColor){
    changeColor = this.newColor;
};

//Draws a rectangle around the button, determines the text size and color 
Button.prototype.draw = function(newColor) {
    fill(this.newColor);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(255, 255, 255);
    textSize(19);
    textAlign(CENTER, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
};

//Draws a rectangle around the button which the mouse can click on and change the scene
Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

//Determines what state the button changes to when clicked on
Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};

//Variable for the "START" button
var strbtn = new Button({
    x: 246,
    y: 297,
    label:"                         START",
    newColor: color(0, 21, 255),
    onClick: function(){
        scene = 2;
    }
});

//Variable for the "INSTRUCTIONS" button
var instbtn = new Button({
    x: 8,
    y: 297,
    label: "                        INSTRUCTIONS",
    newColor: color(0, 21, 255),
    onClick: function(){
        scene = 3;
    }
});
 
//The first screen that appears on the game that contains the "INSTRUCTIONS" buttn, the "START" button, the name of the game, and the bitmojis 
var splashh = function(){
    background(9, 12, 38);
       noStroke();
    for (var i = 0; i < xPositions.length; i++) {
        fill(colors[i]);
        ellipse(yPositions[i], xPositions[i], 5, 5);
        yPositions[i] += speed[i];
        if(yPositions[i] > 400){
           yPositions[i] = 0;
           xPositions[i] = random(0,400);
        }
    }
    textSize(30);
    fill(0, 34, 255);
    text("SHIP SHIFT", 200, 44);
    textSize(20);
    text("Kenny Demola", 75,375);
    text("Darryl A. Fleurantin", 303, 375);
    drawBitmoji(200, 125, 200);
    DrawKenny(150,146,75);
    strbtn.draw();
    instbtn.draw();
    
};

//Constructs the ship's color, height and x and y position 
Ship.prototype.draw = function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 0, height-50);
    image(this.img, this.x, this.y, 60, 60);
};

Ship.prototype.shiftl = function() {
    this.y -= 5;
};

Ship.prototype.shiftr = function() {
    this.y += 5;
};
//If the rocket is hit by the rock then the life goes down by one 
Ship.prototype.checkForShiphit = function(car){
    if((car.x >= this.x && car.x <= (this.x + 50)) &&
        (car.y >= this.y && car.y <= (this.y + 50))) {
        car.y = -400;
        Lives = Lives - 1;
    }
};

//Contructs the rock and gives it x and y variables
var rock = function(x, y) {
    this.x = x;
    this.y = y;
    this.img = getImage("cute/Rock");
};


rock.prototype.draw = function() {
    fill(255, 0, 0);
    image(this.img, this.x, this.y, 30, 30);
};

//Variable that creates a new ship at x - coordinate 30 and y coordinate 390
var Ship = new Ship(20, 200);

// This variable creates the rocks and pushes them onto the screen when called
var rocks = [];
    for (var i = 0; i < numRocks; i++) {  
        rocks.push(new rock(i * 30 + 300, (random(0, 400) * 5)));
        
    if(rocks[i] === numRocks){
          for (var j = 0; j < numRocks; j++) {  
        rocks.push(new rock(j * 30 + 300, (random(0, 400) * 5)));}  
           shipSpeed.push(round(random(3, 7)));
        }
        
}


//Animates the game movements, draws out the splash screen, draws out the scene 2 and scene 3
draw = function() {

    // Tells the code to put the splash screen up if the scene is equal to 1
    if(scene === 1){
     splashh();
     }
    
    // Tells the code to draw out the game if the scene is changed to 2
    if(scene === 2){
    background(9, 12, 38);
       noStroke();
    
    //creates the moving effect of the tiny white ellipses as stars passing by the           ship
    for (var i = 0; i < xPositions.length; i++) {
        fill(colors[i]);
        ellipse(yPositions[i], xPositions[i], 5, 5);
        yPositions[i] += speed[i];
        if(yPositions[i] > 400){
           yPositions[i] = 0;
           xPositions[i] = random(0,400);
        }
    }
    fill(130, 79, 43);
    rectMode(CORNER);
    
    //pushes the rocks onto the screen and places the ship speed between 3 - 13 
    for (var i = 0; i < rocks.length; i++) {
        rocks[i].draw();
        Ship.checkForShiphit(rocks[i]);
        shipSpeed.push(round(random(3, 13)));
        rocks[i].x -= shipSpeed[i];
    }
    fill(0, 60, 255);
    textSize(18);
    image(getImage("space/healthheart"),  20, 20, 20, 20);
    text(Lives, 50, 20);
    text("Score: " + score, 350, 20);
    
    // Continues to add 1 to the score as long as the player's life is more than 0
    if(Lives > 0){
     score = score + 1;   
    }
    // If the player's life is equal to 0 then the game will end and the score will           stop
        else if(Lives === 0){
            rocks = false;
            fill(255, 0, 0);
            text("GAME OVER", 200, 200);
            fill(245, 240, 240);
            text("SCORE", 200, 230);
            text(score, 200, 250);
            
            
    }
    
    
    // Control: Left Arrow
    if(keyIsPressed && keyCode === 37) {
        Ship.shiftl();
    } 
    // Control: Right Arrow
    if(keyIsPressed && keyCode === 39) {
        Ship.shiftr();
    } 
        Ship.draw();
    }
    // An if statement for scene 3 that sets up the instruction page 
    if(scene === 3){
        
      background(9, 12, 38);
      fill(250, 245, 245);
      rect(90, 243, 64, 26);
      rect(219, 243, 64, 26);
      fill(255, 0, 0);
      textSize(30);
      text("<", 119, 235);
      text(">", 254, 235);
      textSize(20);
      text("CONTROLS", 190, 200);
      text("left arrow", 121, 278);
      text("right arrow", 251, 278);
      text("YOU HAVE FIVE LIVES TO STAY ALIVE!", 198, 50);
      text("Shift the ship up and down in order to dodge" , 198, 120);
      text("the rocks and beat the game!", 191, 150);
      strbtn.draw();
    }
 
// An if statement that stops the game if a player reaches 10,000 points.
 if(score === 10000){
        rocks = false;
        Lives = false;
        score = score;
        fill(255, 0, 0);
        text("GAME COMPLETE LEGEND", 200, 200);
        fill(245, 240, 240);
        text("SCORE", 200, 230);
        text(score, 200, 250);
        image(getImage("space/healthheart"),  15, 15, 60, 60);
 }

};

//Allows for the buttons to be pressed on by the mouse and change the scene 
mouseClicked = function(){
  strbtn.handleMouseClick();
  instbtn.handleMouseClick();
  
};
